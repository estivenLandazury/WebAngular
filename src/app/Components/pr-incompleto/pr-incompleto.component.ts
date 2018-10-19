import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ProyectsService } from '../../Services/proyects.service';
import { Proyecto } from '../../Models/proyecto';
import {Tareas} from '../../Models/tareas';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-pr-incompleto',
  templateUrl: './pr-incompleto.component.html',
  styleUrls: ['./pr-incompleto.component.css']
})
export class PrIncompletoComponent implements OnInit {

  private _subscriptions: Subscription[] = [];
  Descripcion: String;
  Id:String;
  Estado: String;
  FechaEntrega: String;
  FechaInicio: String;
  
  nombre: String;
  tareas:Tareas[];
  proyectoSeleccionado: Proyecto;
  tarea: Tareas;

 Nombre:String;
 Prioridad:String;
 Responsable: String;

  proyecto: Proyecto;
  proyectos: Proyecto[];
  constructor(private proyectsService: ProyectsService) {
    


    
    this.proyecto = {
      "FechaInicio": "",  "Id":"", "Descripcion": "", "Estado": "", "FechaEntrega": "",  "Responsable": "",
      "nombre": "", "tareas":[]
    };
    
  }



  

 

  ngOnInit() {

    this._subscriptions.push( this.proyectsService.getProyectos().subscribe(data =>
      this.proyectos = data)
     );

    
  }


  public ngOnDestroy() {
    // Unsubscribe from each Subscription
    this._subscriptions.forEach((subscription: Subscription) =>
     { subscription.unsubscribe() });
  }

  cambiarProyecto(proyecto: Proyecto){
    console.log(proyecto.Descripcion);
     this.proyectoSeleccionado = proyecto;
    /*
    this.proyectoSeleccionado.Tareas.push(this.tarea);
    this.proyectsService.updateProyect(this.proyectoSeleccionado);*/
  }


  darTareas(proyecto:Proyecto){

    this.tareas=this.proyectsService.getTareas(proyecto.Id+"");
    
  }



  
AnadirTarea(){
 let tar: Tareas={
  "Descripcion":this.Descripcion,
  "Nombre": this.Nombre,
  "Prioridad": this.Prioridad,}
 console.log( this.proyectoSeleccionado.nombre);

 console.log(tar.Descripcion);


 /*this.proyectoSeleccionado.Tareas.push(tar);*/
 this.proyectsService.addTare(this.proyectoSeleccionado,tar);
/*this.proyectoSeleccionado.tareas.push(tar);*/
console.log("se agregó exitosamente");


}


  
}
