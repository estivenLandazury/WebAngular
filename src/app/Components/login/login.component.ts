import { Component, OnInit, NgZone } from '@angular/core';
import{ProyectsService} from '../../Services/proyects.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Service:ProyectsService;
  router:Router;
  public email: string;
  public password: string;
  constructor(public Services:ProyectsService, public Routers: Router,private _ngZone: NgZone) { 
   
    this.Service=Services;
    this.router=Routers;

  }



  onSubmitLogin() {
  console.log(this.email);
    this.Service.loginEmail(this.email, this.password)
    .then( (res) => {
      this.router.navigate(['administrador/ProyectosIncompletos']);
    }).catch((err) => {
      this.router.navigate(['/login']);
    });
  }


  ngOnInit() {

   
  }



  /*

  ingresar(){
    console.log("si funciona le botón")
    

    this.Service.loginGoogle().then((res)=>{
        this.router.navigate(['/administrador']);
    }).catch(err=>console.log(err.message));
    
    
  }
*/


  
}
