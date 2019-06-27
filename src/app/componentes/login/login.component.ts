import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Usuario } from '../../clases/usuario';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  unUsuario:  Usuario;
  constructor(private builder: FormBuilder, private auth : AuthService, private router : Router) { 
    this.unUsuario = new Usuario();
    
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

 
  registroForm: FormGroup = this.builder.group({
    email: this.email,
    clave: this.clave
  })
  ngOnInit() {
  }


  login()
{
    this.auth.loginUser(this.unUsuario.email,this.unUsuario.clave ).then((user) => {
      console.log("Ingreso Exitoso");
      this.router.navigate(['principal']);

      }
    )
     .catch(err=>{
      alert("Error al loguearse, realizarlo nuevamente");
      console.log("Error al loguearse", err);
      window.location.reload();
    })
  }

}
