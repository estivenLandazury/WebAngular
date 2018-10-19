import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { map } from "rxjs/operators";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Proyecto } from '../Models/proyecto';
import { Tareas } from '../Models/tareas';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {
  ProductList: Observable<Proyecto[]>;

  tareas: Observable<Tareas[]>;
  tarea: Tareas[];
   

  proyectCollection: AngularFirestoreCollection<Proyecto>;
  proyectDocument: AngularFirestoreDocument<Proyecto>;
  selecProyect: Proyecto = new Proyecto();

  constructor(public afAuth: AngularFireAuth, private readonly db: AngularFirestore) {
    this.proyectCollection = db.collection('Proyectos');
    this.ProductList = this.proyectCollection.valueChanges();



  }


  getProyectos() {
    return this.ProductList;
  }



  addProyecto(proyecto: Proyecto) {
    const id = this.db.createId();
    proyecto.Id = id;
    this.proyectCollection.doc(id).set(proyecto);
  }



  getTareas(idProyecto: string) {
    const url = '/Proyectos/' + idProyecto;
    console.log(idProyecto);
    console.log(url);
    this.tareas = this.db.doc(url).collection('tareas').snapshotChanges().pipe(map(
      tareas => {
        return tareas.map( tareita => ({
        id: tareita.payload.doc.id,
        Prioridad: tareita.payload.doc.get('Descripcion'),
        Descripcion: tareita.payload.doc.get('Prioridad'),
        Nombre: tareita.payload.doc.get('Nombre'),

      
        })
      );
      }
    ));
    this.tareas.subscribe(valores => this.tarea = valores);
    if (this.tarea != null ) {
      console.log( "Es nul");
    }
    return this.tarea;
  }



  /* Añadair Tareas*/
  addTare(proyecto: Proyecto, tarea: Tareas) {
    const url = '/Proyectos/' + proyecto.Id;
    this.db.doc(url).collection('tareas').add(tarea);

  }



  
loginEmail(email: string, pass: string) {
  return new Promise((resolve, reject) => {
    this.afAuth.auth.signInWithEmailAndPassword(email, pass)
    .then( userData =>  resolve(userData),
    err => reject (err));
  });
}


}





 /** 
  loginGoogle() {
    return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
  }


  getProyects(){
    obtendrá los producto de una lista de la base de datos
    return this.ProductList= this.firebase.list('proyects');
  }


  insertProyect(proyecto:Proyecto){
    this.ProductList.push({
      Descripcion:proyecto.Descripcion,
      Estado: proyecto.Estado,
      FechaEntrga:proyecto.FechaEntrega,
      FechaInicio:proyecto.FechaInicio,
      Responsable: proyecto.Responsable,
      nombre:proyecto.nombre,
      Tareas: proyecto.Tareas,
    });
  }



  updateProyecto(proyecto:Proyecto){
    this.ProductList.update(proyecto.$key+"", {
      Descripcion:proyecto.Descripcion,
      Estado: proyecto.Estado,
      FechaEntrga:proyecto.FechaEntrega,
      FechaInicio:proyecto.FechaInicio,
      Responsable: proyecto.Responsable,
      nombre:proyecto.nombre,
      Tareas: proyecto.Tareas,
    });
  }
  




  deleteProyecto($key:string){
    this.ProductList.remove($key);

  }
  
*/



