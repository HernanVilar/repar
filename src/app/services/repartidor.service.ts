import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Repartidor } from '../clases/repartidor';


@Injectable({
  providedIn: 'root'
})
export class RepartidorService {

  private dbPath = '/altaRepartidor';

  MensajesRef: AngularFirestoreCollection<Repartidor>;
 
  constructor(private db: AngularFirestore) { 
    this.MensajesRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Repartidor> {
    this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef;
  }

  create(mensajes: Repartidor): any {
    this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef.add({...mensajes});
  }
 
  update(id: string, data: Repartidor): Promise<void> {
    this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef.doc(id).delete();
  }
}
