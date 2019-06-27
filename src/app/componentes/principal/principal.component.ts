import { Component, OnInit } from '@angular/core';
import {Usuario} from './../../clases/usuario';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public tipo: any;

  constructor(private db: AngularFirestore) { 
    
    
    let email: string = localStorage.getItem("email");
    localStorage.setItem("email", email);
    var docRef = db.collection("usuarios").doc(email);

    docRef.ref.get().then(function(doc) {
        if (doc.exists) {
            localStorage.setItem("tipo", doc.data().tipo); 
            
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });


  }

  

  ngOnInit() {
   

  }
  prueba()
  {
    this.tipo = localStorage.getItem("tipo");
    console.log("es del tipo ", this.tipo);
  }

}
