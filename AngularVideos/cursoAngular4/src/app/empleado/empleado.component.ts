import { Component } from "@angular/core";
import { Empleado } from "./empleado";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { PeticionesService } from "../services/peticiones.service";

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html',
    providers: [PeticionesService]
})
export class EmpleadoComponent {
    public titulo = 'Empleados CADS';
    public empleados:Array<Empleado>;
    public numeroEmpleado:number;
    public idParametro;

    constructor(
        private _route:ActivatedRoute,
        private _router:Router,
        private _peticiones: PeticionesService
    ){
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
        this._route.params.forEach((params:Params) => {
           this.idParametro = params['id'] ;
        });

        this.getArticulos();
    }

    cambiarTrabajador(){
        this.numeroEmpleado += 1;

        if(this.numeroEmpleado === this.empleados.length){
            this.numeroEmpleado = 0;
        }
    }

    //EJERCICIO PETICIONES AJAX CON 'ARTICULOS'
    public articulos;

    getArticulos(){
        this._peticiones.getArticulos().subscribe(
            result => {
                this.articulos = result.json();
                // this.articulos = result;
            },
            error => {
                var mensajeError = <any>error;
                console.log(mensajeError);
            }
        );
    }
}