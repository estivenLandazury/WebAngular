import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {ProyectsService} from '../../Services/proyects.service';
import{ Proyecto} from '../../Models/proyecto';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  router:Router;
 





  constructor( ) {

 
  
   }

   

  ngOnInit() {
  }
  
  



}
