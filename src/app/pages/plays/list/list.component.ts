import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {

  @Input() playObjectInput?: Array<any>;
  @Output() imageObjectEmitter: EventEmitter<any> = new EventEmitter();
  chosenImage: any;

  constructor() {
  }

  ngOnChanges(){
    if (this.playObjectInput){
      this.chosenImage = this.playObjectInput[0];
      this.reload();
    }
  }

  ngOnInit(): void {


  }

  reload() {
    this.imageObjectEmitter.emit(this.chosenImage);
  }
}
