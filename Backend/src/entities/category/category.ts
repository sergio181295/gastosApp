// export class Transaction {
//     constructor(
//         public descripcion: string,
//         public valor: number,
//         public debitoCredito: boolean,
//         public fecha: Date,
//         public categoriaId: number,
//         public cuentaIdId: number
//     ) {

//     }
// }

export default interface Category {
    name: string,
    description: string
}