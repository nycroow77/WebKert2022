import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaysRoutingModule } from './plays-routing.module';
import {PlaysComponent} from "./plays.component";
import {ListComponent} from "./list/list.component";
import {ViewerComponent} from "./viewer/viewer.component";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {GenreFormatPipe} from "../../shared/pipes/genre-format.pipe";
import {PlaydateFormatPipe} from "../../shared/pipes/playdate-format.pipe";


@NgModule({
  declarations: [
    PlaysComponent,
    ListComponent,
    ViewerComponent,
    GenreFormatPipe,
    PlaydateFormatPipe
  ],
  imports: [
    CommonModule,
    PlaysRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    FlexModule,
    MatButtonModule,

  ]
})
export class PlaysModule { }
