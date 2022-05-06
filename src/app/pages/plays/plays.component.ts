import { Component, OnInit } from '@angular/core';
import {PlayService} from "../../shared/services/playService/play.service";
import {Image} from "../../shared/models/Image";

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.scss']
})
export class PlaysComponent implements OnInit {

  playObject?: Array<Image>;
  chosenImage?: Image;

  constructor(private playService: PlayService) {
  }

  ngOnInit(): void {
    this.playService.loadImageMeta('_credits.json').subscribe((data: Array<Image>) => {
      console.log(data);
      this.playObject = data;
    });
  }


  loadImage(imageObject: any) {
    this.chosenImage = imageObject;
  }
}
