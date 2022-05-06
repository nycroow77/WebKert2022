import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Ticket} from "../../models/Ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  collectionName = 'Tickets'

  constructor(private afs: AngularFirestore) {}

  create(ticket: Ticket){
      return this.afs.collection<Ticket>(this.collectionName).doc(ticket.id).set(ticket);
  }

}
