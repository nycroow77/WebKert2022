import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../models/DialogData";

@Component({
  selector: 'app-popupdialog',
  templateUrl: './popupdialog.component.html',
  styleUrls: ['./popupdialog.component.scss']
})
export class PopupdialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopupdialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
