import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import {AppRoutingModule } from './app.routing';
import { PrTerminadoComponent } from './Components/pr-terminado/pr-terminado.component';
import { PrIncompletoComponent } from './Components/pr-incompleto/pr-incompleto.component';
import { AddProyectComponent } from './Components/add-proyect/add-proyect.component';
import {ProyectsService} from './Services/proyects.service';
import { AngularFireDatabase } from 'angularfire2/database';
import {NgbModule,NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProyectosComponent,
    PrTerminadoComponent,
    PrIncompletoComponent,
    AddProyectComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    NgbModule,NgbAlertModule

    

  ],
  providers: [ProyectsService,AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
