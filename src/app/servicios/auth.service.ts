import { Injectable } from '@angular/core';
import { JwtHelperService  } from '@auth0/angular-jwt';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  private _token: string;
  constructor(private afAuth :  AngularFireAuth, public jwtHelper: JwtHelperService, private router: Router) { 

    this.afAuth.authState.subscribe(user => {
      if (user) {
      this.userData = user.email;
      localStorage.setItem('email', JSON.stringify(this.userData));
      JSON.parse(localStorage.getItem('email'));
      } else {
      localStorage.setItem('email', null);
      JSON.parse(localStorage.getItem('email'));
      }
      })
  }

  registerUser(email:string, password:string){
    return this.afAuth.auth.createUserWithEmailAndPassword( email, password)
    .then((res)=>{
     console.log("el usuario se ha creado exitosamente")
    })
    .catch(err=>Promise.reject(err))
 }

 // Login de usuario
 loginUser(email:string, password:string){
  return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(user=>Promise.resolve(user))
    .catch(err=>Promise.reject(err))
  }

  isLoggedIn() {
    var user = firebase.auth().currentUser;
    let bool: boolean = false;
    if (user) {
      console.log(user.email);
      localStorage.setItem("email", user.email);
      bool = true;
    } else {
  // No user is signed in.
    }
    return bool;
  }

  public getExpirationDate()
  {
    
    try {
      console.log('getExpirationDate', this.jwtHelper.getTokenExpirationDate(this._token))
      return this.jwtHelper.getTokenExpirationDate(this._token);
    } catch (error) {
      return null;
    }
  }


  public logOut()
  {
    try {
      localStorage.setItem('token', null);
      this.router.navigate(['/login']);
    } catch (error) {
      return false;
    }
  }

  public getNivel ()
  {
    console.log(this.jwtHelper.decodeToken(this._token));
    if (this.jwtHelper.decodeToken(this._token).nivel || this.jwtHelper.decodeToken(this._token).nivel === 0)
      return this.jwtHelper.decodeToken(this._token).nivel;
    else
      return 1000;
    
  }

}
