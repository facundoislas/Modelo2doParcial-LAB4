import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service'
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-header-email',
  templateUrl: './header-email.component.html',
  styleUrls: ['./header-email.component.css']
})
export class HeaderEmailComponent implements OnInit {

  email: string = localStorage.getItem("email");

  constructor(private auth : AuthService) {
    
   }

  ngOnInit() {
    
  }

  logueado()
  {
    if(this.email != null)
      return true;
    return false;
  }
}
