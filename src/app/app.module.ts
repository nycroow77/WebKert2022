import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { PlaysComponent } from './pages/plays/plays.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { ListComponent } from './pages/plays/list/list.component';
import { ViewerComponent } from './pages/plays/viewer/viewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import {AngularFireModule} from "@angular/fire/compat";
import { BottomsheetComponent } from './shared/bottomsheet/bottomsheet.component';
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import { PlaydateFormatPipe } from './shared/pipes/playdate-format.pipe';
import { PopupdialogComponent } from './shared/popupdialog/popupdialog/popupdialog.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    //MainComponent,
    //PlaysComponent,
    //ContactComponent,
    MenuComponent,
    BottomsheetComponent,
    PopupdialogComponent,
    //ListComponent,
    //ViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatIconModule,
    MatDialogModule,
    FlexLayoutModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [ViewerComponent],
  exports: [
    BottomsheetComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

