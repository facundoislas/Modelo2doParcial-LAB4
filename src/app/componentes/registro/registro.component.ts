import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../clases/usuario';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  items: Observable<any[]>;
  unUsuario: Usuario;

  constructor( private builder: FormBuilder , private auth : AuthService, private db: AngularFirestore, private router : Router) {

    this.unUsuario = new Usuario();
    this.items = db.collection('items').valueChanges();
   }

   email = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
    Validators.email
  ]);

  clave = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(15)
  ]);

  tipo = new FormControl('', [
    Validators.required
  ]);

  registroForm: FormGroup = this.builder.group({
    email: this.email,
    clave: this.clave,
    tipo: this.tipo
  })


  ngOnInit() {
  }

  enviar()
  {
    console.log(this.unUsuario);
    this.auth.registerUser(this.unUsuario.email,this.unUsuario.clave)
    .then((unUsuario) => {
      console.log("Alta exitosa");
      console.log(this.unUsuario);
      this.router.navigate(['principal']);
    })
    .catch(err=>{
     console.log("No se ha podido registrar el usuario");
    })

    this.db.collection("usuarios").doc(this.unUsuario.email).set({

      email: this.unUsuario.email,
      clave: this.unUsuario.clave,
      tipo: this.unUsuario.perfil

    })
    .then(function(docRef) {
      console.log("Se guarda el usuario en base ");
  })
  .catch(function(error) {
      alert("Error al registrarse, realizarlo nuevamente")
      console.error("Error al escribir el usuario", error);
  });
  }

 


}
