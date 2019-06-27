import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  items: Observable<any>;
  lista: Array<any> = [];
  mensaje: string;
  unMensaje = "hola";

  coleccionTipadaFirebase:AngularFirestoreCollection<any>;
ListadoDeChatsObservable:Observable<any[]>;

  constructor(private db: AngularFirestore) {

    this.coleccionTipadaFirebase= this.db.collection<any>('chat', ref=> ref.orderBy('hora')); 
    //para el filtrado mirar la documentación https://firebase.google.com/docs/firestore/query-data/queries?authuser=0
    this.ListadoDeChatsObservable=this.coleccionTipadaFirebase.valueChanges();
    this.ListadoDeChatsObservable.subscribe(x => {
        this.lista = x
       
    })
    
   }

  ngOnInit() {
  }

  enviar()
  {
      this.db.collection("chat").add({
        mensaje: this.mensaje,
        user: localStorage.getItem("email"),
        hora: Date.now()
    })
    .then(function(docRef) {
      console.log("Se guarda el mensaje ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error al escribir el mensaje ", error);
  });
      
      this.mensaje="";
  }

}
