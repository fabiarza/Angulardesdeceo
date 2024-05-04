import { Component,OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})

export class EmpleadoComponent {

  nombre ="Fabiana";
  apellido ="Arzamendia"; 
  edad = "0" ;
  empresa ="Markoni";


 cuadroDialogo=false;
 btnActivo = false;
 //checkbox
 checkboxActivo = false;
 textDeUsuarioRegistrado = "No hay nadie registrado";

 setUsuarioRegistrado(event:Event){
 
 // alert(event.target);
  if((<HTMLInputElement> event.target).value=="si"){
    this.textDeUsuarioRegistrado = "El usuario acaba de registrarse";

  }else{
      this.textDeUsuarioRegistrado = "No hay nadie registrado";
  }

 }


 activarBtn(){this.btnActivo = true; }

 constructor(){ }
 
  ngOnInit() {
    
     this.getCheckboxActivado();
    
  }

  getCheckboxActivado(){ this.checkboxActivo = false;}
 

 
 /*  dameEdad():void{
    if(this.edad > "18")
    {
      
      console.log("Mayor");
       
    }
    else
    {
      
      console.log("MENOR");
    }
      
  }*/
    
  
}
