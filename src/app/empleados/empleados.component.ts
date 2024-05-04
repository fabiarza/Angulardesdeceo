import { Component } from "@angular/core";
import { EmpleadoComponent } from "../empleado/empleado.component";




@Component({
    selector:"app-empleados",
    standalone: true,
    imports:[EmpleadoComponent],
   
    templateUrl:"./empleados.component.html",
   // template:`
   // <h2>Empleados De La Empresa Componente Empleados</h2>
   // <p>Hola Angular</p>
    //`
   // , 
    
    styleUrl:"./empleados.component.css"
   //styles:["P{background:red; text-decoration:line-through;font-style:italic;}",
  // "h2{text-align: center;color:brown;text-shadow: 0px 1px 3px green;}"]



})

export class EmpleadosComponent {
   

}