import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';

import { EmpleadoComponent } from "./empleado/empleado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmpleadosComponent,EmpleadoComponent],
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//Esta es la clase y dentro creamos sus propiedades 
//Estas propiedades luego puedo usarlos con etiquetas HTML  o solos
export class AppComponent {
  title = 'miPrimeraAppAngular';
  texto ='Estoy feliz de Aprender Angular v17 que felicidad'
}
//Video 7 Interpolacion de Strings

