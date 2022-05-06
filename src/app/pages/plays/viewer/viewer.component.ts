import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Image} from "../../../shared/models/Image";
import {PlayService} from "../../../shared/services/playService/play.service";
import {UserService} from "../../../shared/services/userService/user.service";
import {User} from "../../../shared/models/User";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {BottomsheetComponent} from "../../../shared/bottomsheet/bottomsheet.component";

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnChanges {

  @Input() imageInput?: Image;
  loadedImage?: string;
  user?: User;
  data: any;

  constructor(private playService: PlayService, private userService: UserService, private bottomSheet: MatBottomSheet) { }

  ngOnChanges(): void{
    if (this.imageInput?.id){
      this.playService.loadImage(this.imageInput.image_url).subscribe((data) => {

        this.loadedImage = data;

        /*let reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onloadend = () => {
          this.loadedImage = reader.result as string;
        }*/
      });
    }
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data=>{
      this.user = data;
      //bebirom igy állítani (itt kommentformban allitotta volna be a user nevet auttomatan)
    });
  }


  onBookTicket() {
    console.log(this.imageInput?.title);
    let sheet = this.bottomSheet.open(BottomsheetComponent, {
      data: {
        myString: 'My String'
      }
    });

    sheet.afterDismissed().subscribe((str)=>{
      console.log(str);
    });
  }



}
