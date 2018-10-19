import { RouterModule, Routes } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './Components/login/login.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import{ PrTerminadoComponent } from './Components/pr-terminado/pr-terminado.component';
import {PrIncompletoComponent} from './Components/pr-incompleto/pr-incompleto.component';
import {AddProyectComponent} from './Components/add-proyect/add-proyect.component';


const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'administrador', component: ProyectosComponent,
    children: [
        { path: '', redirectTo: 'ProyectosIncompletos', pathMatch: 'full' },
        { path: 'ProyectosTerminados', component:PrTerminadoComponent },
        { path: 'ProyectosIncompletos',component:PrIncompletoComponent },
        { path: 'AñadirProyecto',component:AddProyectComponent},


      ]
     },
    
    /* { path: 'ProyectosTerminados', component:  PrTerminadoComponent },*/


];


@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule { }