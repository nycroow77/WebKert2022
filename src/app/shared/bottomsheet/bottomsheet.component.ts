import {Component, Inject, Injector, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {Ticket} from "../models/Ticket";
import {ViewerComponent} from "../../pages/plays/viewer/viewer.component";

@Component({
  selector: 'app-bottomsheet',
  templateUrl: './bottomsheet.component.html',
  styleUrls: ['./bottomsheet.component.scss']
})
export class BottomsheetComponent implements OnInit {

  title?: string;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any, private bottomSheetRef: MatBottomSheetRef<BottomsheetComponent>,
              private viewerCompHelper: ViewerComponent) { }

  ngOnInit(): void {
  }

  myAction(str: string){
    this.bottomSheetRef.dismiss(str);

    this.createTicketInFireStore();

  }

  createTicketInFireStore(){


    console.log('lotte');
    console.log(this.title);

    /*const ticket: Ticket = {

      id:

    }*/

  }

}
