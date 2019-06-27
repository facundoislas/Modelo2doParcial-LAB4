import { Component, OnInit } from '@angular/core';
import {Animal} from '../../clases/animal';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Validators, FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';



@Component({
  selector: 'app-alta-mascota-admin',
  templateUrl: './alta-mascota-admin.component.html',
  styleUrls: ['./alta-mascota-admin.component.css']
})
export class AltaMascotaAdminComponent implements OnInit {


  coleccionTipadaFirebase:AngularFirestoreCollection<any>;
  ListadoDeMascotas:Observable<any[]>;
  lista: Array<any> = [];
  unAnimal: Animal;
  unAnimal2: Animal;
  modifica:boolean = false;
  id: string;

  constructor(private db: AngularFirestore, private storage: AngularFireStorage, private builder: FormBuilder) {
    
    this.unAnimal = new Animal ();
    
    
    this.listar();
   }


   nombre = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
    Validators.minLength(4)]);

    raza = new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(4)]);
      
      dueno = new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(4)]);

        edad = new FormControl('', [
          Validators.required,
          Validators.min(0),
          Validators.max(99)]);

          tipo = new FormControl('', [
            Validators.required]);

            foto = new FormControl(null);

              id2 = new FormControl(null);

        registroForm: FormGroup = this.builder.group({
          nombre: this.nombre,
          dueno: this.dueno,
          tipo: this.tipo,
          foto:this.foto,
          raza: this.raza,
          edad: this.edad,
          id: this.id2
      
        })

   listar()
   {
    this.coleccionTipadaFirebase= this.db.collection<any>('mascotasAdmin'); 
    //para el filtrado mirar la documentación https://firebase.google.com/docs/firestore/query-data/queries?authuser=0
    this.ListadoDeMascotas=this.coleccionTipadaFirebase.valueChanges();
    this.ListadoDeMascotas.subscribe(x => {
        this.lista = x
        
    })

    
   }

  ngOnInit() {
  }

  onUpload(e)
  {
    this.id = this.unAnimal.nombre+"-"+this.unAnimal.dueno
    //console.log(this.id);
    //console.log("subir ", e.target.files[0]);
    let file = e.target.files[0];
    let filePath = 'image/'+this.id+'.jpg';
    let ref = this.storage.ref(filePath);
    let task = this.storage.upload(filePath, file);
    
  }


  

  subir()
  {
    console.log(this.unAnimal);
    this.id = this.unAnimal.nombre+"-"+this.unAnimal.dueno;
    const ref = this.storage.ref('image/'+this.id+'.jpg');
    this.db.collection("mascotasAdmin").doc(this.id).set({

      raza: this.unAnimal.raza,
      tipo: this.unAnimal.tipo,
      edad: this.unAnimal.edad,
      dueno: this.unAnimal.dueno,
      nombre: this.unAnimal.nombre,
      id: this.id,
      foto: 'image/'+this.id+'.jpg'

    })
    .then(function(docRef) {
      console.log("Se guarda la mascota en base ");
  })
  .catch(function(error) {
      console.error("Error al escribir la mascota", error);
  });
  
  }

  


  llenarInputs(mascota)
  {
    
    this.unAnimal2 = mascota;
    //(<HTMLInputElement> adelante para castearlo
    (<HTMLInputElement>document.getElementById('nombre')).value = mascota.nombre;
    (<HTMLInputElement>document.getElementById('tipo')).value = mascota.tipo;
    (<HTMLInputElement>document.getElementById('raza')).value = mascota.raza;
    (<HTMLInputElement>document.getElementById('edad')).value = mascota.edad;
    (<HTMLInputElement>document.getElementById('dueno')).value = mascota.dueno;
    (<HTMLInputElement>document.getElementById('id')).value = mascota.id;
    this.modifica=true;
    
  }

  llenarAnimal()
  {
    this.unAnimal.nombre = (<HTMLInputElement>document.getElementById('nombre')).value ;
    this.unAnimal.tipo = (<HTMLInputElement>document.getElementById('tipo')).value ;
    this.unAnimal.raza =  (<HTMLInputElement>document.getElementById('raza')).value ;
    this.unAnimal.edad = (<HTMLInputElement>document.getElementById('edad')).value ;
    this.unAnimal.dueno = (<HTMLInputElement>document.getElementById('dueno')).value ;
    this.unAnimal.id = (<HTMLInputElement>document.getElementById('id')).value ;
  }



  modificar()
  {
    
    
    this.llenarAnimal();
    console.log("un animal 1 : ", this.unAnimal);
    let washingtonRef = this.db.collection("mascotasAdmin").doc(this.unAnimal2.id)

// Set the "capital" field of the city 'DC'
return washingtonRef.set({
  raza: this.unAnimal.raza,
  tipo: this.unAnimal.tipo,
  edad: this.unAnimal.edad,
  dueno: this.unAnimal.dueno,
  nombre: this.unAnimal.nombre,
  foto: this.unAnimal2.id
},
   { merge: true }
)
.then(function() {
    console.log("Document successfully updated!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
  }
}
