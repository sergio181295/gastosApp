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

export default interface Transaction {
    description: string,
    value: number,
    debitCredit: boolean,
    date: Date,
    categoryId: number,
    accountId: number
}