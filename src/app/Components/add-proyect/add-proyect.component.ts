import { Component, OnInit } from '@angular/core';
import { ProyectsService } from '../../Services/proyects.service';
import { Proyecto } from '../../Models/proyecto';
import {Tareas} from '../../Models/tareas';
@Component({
  selector: 'app-add-proyect',
  templateUrl: './add-proyect.component.html',
  styleUrls: ['./add-proyect.component.css']
})
export class AddProyectComponent implements OnInit {
 
  tareas: Tareas[];
  tarea: Tareas;
  proyecto: Proyecto;
  proyectos: Proyecto[];
  constructor(private proyectsService: ProyectsService) { 
    
    /*
    this.tarea={ 
      "Descripcion":"Tarea de landa",
      "Nombre": "TareaWeb",
      "Prioridad": "Alta",

    }
    */
   
    this.proyecto = {
      "Descripcion": "", "Estado": "", "FechaEntrega": "", "FechaInicio": "", "Id":"", "Responsable": "",
      "nombre": "", "tareas": [],
    }
    
  }
  



  anadirProyectos(){
    if(this.proyecto.nombre !="" && this.proyecto.Descripcion !="" && this.proyecto.Responsable !=""){
      console.log("Se agregó Correctamente")
      this.proyectsService.addProyecto(this.proyecto);
    }
    console.log("No pasó nada"+ this.proyecto.nombre);

  }

  ngOnInit() {
    this.proyectsService.getProyectos();
  }

}
