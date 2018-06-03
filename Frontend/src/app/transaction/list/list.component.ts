import { Component } from "@angular/core";

import { Transaction } from "../transaction.model";

@Component({
    selector: 'listTransaction',
    templateUrl: './list.component.html'
})
export class ListTransaction {

    public list: Array<Transaction>;

    constructor(){
        this.list = new Array(
            {
                descripcion: 'prueba 1',
                valor: 100.00,
                debitoCredito: true,
                fecha: new Date(),
                categoriaId: 1,
                cuentaIdId: 1
            },
            {
                descripcion: 'prueba 2',
                valor: 200.00,
                debitoCredito: false,
                fecha: new Date(),
                categoriaId: 2,
                cuentaIdId: 2
            },
            {
                descripcion: 'prueba 3',
                valor: 300.00,
                debitoCredito: true,
                fecha: new Date(),
                categoriaId: 3,
                cuentaIdId: 3
            }
        );
    }
}