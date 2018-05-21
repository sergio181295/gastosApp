import { Component } from "@angular/core";
import { Empleado } from "./empleado";

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent {
    public titulo = 'Empleados CADS';
    public empleados:Array<Empleado>;
    public numeroEmpleado:number;
    
    constructor(){
        this.empleados = [
            new Empleado('Sergio', 22, false),
            new Empleado('Oscar', 25, true),
            new Empleado('Ruben', 30, true),
            new Empleado('Victor', 28, false),
            new Empleado('Abner', 27, true)
        ]

        this.numeroEmpleado = 0;
    }
    
    ngOnInit(){
        console.log(this.empleados);
    }

    cambiarTrabajador(){
        this.numeroEmpleado += 1;

        if(this.numeroEmpleado === this.empleados.length){
            this.numeroEmpleado = 0;
        }
    }
}