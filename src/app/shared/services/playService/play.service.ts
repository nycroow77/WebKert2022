import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {Image} from "../../models/Image";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class PlayService {


  constructor(private http: HttpClient, private afs: AngularFirestore, private storage: AngularFireStorage) {
  }

  collectionName = 'Images';

  loadImageMeta(metaUrl: string): Observable<Array<Image>> {
    return  this.afs.collection<Image>(this.collectionName).valueChanges();
  }

  loadImage(imageUrl: string){
    return this.storage.ref(imageUrl).getDownloadURL();
  }

}
