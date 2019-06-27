import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {environment} from '../environments/environment';
import { AuthService } from '../app/servicios/auth.service';
import {FirebaseStorageService} from '../app/servicios/firebase-storage.service';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import {VerificarJwtService} from './servicios/verificar-jwt.service';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { HeaderEmailComponent } from './componentes/header-email/header-email.component';
import { AltaMascotaAdminComponent } from './componentes/alta-mascota-admin/alta-mascota-admin.component';
import { TurnosAdminComponent } from './componentes/turnos-admin/turnos-admin.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { AltaMascotaClienteComponent } from './componentes/alta-mascota-cliente/alta-mascota-cliente.component';
import { AltaTurnoComponent } from './componentes/alta-turno/alta-turno.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent,
    PrincipalComponent,
    HeaderEmailComponent,
    AltaMascotaAdminComponent,
    TurnosAdminComponent,
    ChatComponent,
    AltaMascotaClienteComponent,
    AltaTurnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    HttpClientModule,
    JwtModule
  ],
  providers: [AuthService, AngularFirestore, VerificarJwtService, JwtHelperService, FirebaseStorageService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }],
  bootstrap: [AppComponent]
})
export class AppModule { }
