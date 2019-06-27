import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-alta-turno',
  templateUrl: './alta-turno.component.html',
  styleUrls: ['./alta-turno.component.css']
})
export class AltaTurnoComponent implements OnInit {

  turno: string;
  email: string;

  constructor(private db: AngularFirestore,) {
    this.email = localStorage.getItem("email");
  }

  ngOnInit() {
  }

  enviar()
  {
    console.log(this.turno);
    this.db.collection("turnos").add({
      usuario: this.email,
      fecha: this.turno

    })
    .then(function(docRef) {
      console.log("Se guarda el turno en base ");
      alert("Se ha guardado el turno")
      window.location.reload();
  })
  .catch(function(error) {
      console.error("Error al escribir el turno", error);
  });
  }

}
