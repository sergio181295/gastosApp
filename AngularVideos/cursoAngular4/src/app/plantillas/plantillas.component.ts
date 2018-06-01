import { Component } from '@angular/core';

@Component({
    selector: 'plantillas',
    templateUrl: './plantillas.component.html'
})

export class PlantillasComponent {
    public titulo;
    public admin;

    constructor(){
        this.titulo = "Plantillas ngTemplate en angular";
        this.admin = true;
    }
}