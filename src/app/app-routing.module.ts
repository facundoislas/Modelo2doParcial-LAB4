import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from '../app/componentes/registro/registro.component';
import { LoginComponent } from '../app/componentes/login/login.component';
import { HomeComponent } from '../app/componentes/home/home.component';
import {AppComponent} from '../app/app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import {VerificarJwtService} from './servicios/verificar-jwt.service';
import { AltaMascotaAdminComponent } from './componentes/alta-mascota-admin/alta-mascota-admin.component';
import { AltaMascotaClienteComponent } from './componentes/alta-mascota-cliente/alta-mascota-cliente.component';
import { AltaTurnoComponent } from './componentes/alta-turno/alta-turno.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { TurnosAdminComponent } from './componentes/turnos-admin/turnos-admin.component';


const routes: Routes = [
  { path:'registro', component: RegistroComponent},
  { path:'login', component: LoginComponent},
  { path:'', component: HomeComponent},
  { path:'home', component: HomeComponent},
  { path:'principal', canActivate: [VerificarJwtService], component: PrincipalComponent },
  { path:'admin', canActivate: [VerificarJwtService],component: AltaMascotaAdminComponent},
  { path: 'cliente' , canActivate: [VerificarJwtService], component: AltaMascotaClienteComponent  },
  { path: 'altaTurno', canActivate: [VerificarJwtService], component: AltaTurnoComponent  },
  { path: 'chat', canActivate: [VerificarJwtService], component: ChatComponent  },
  { path: 'turnos', canActivate: [VerificarJwtService], component: TurnosAdminComponent  },
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
