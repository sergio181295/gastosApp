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

import Category from '../category/category';
import Account from '../account/account';

export default interface Transaction {
    description: string,
    value: number,
    debitCredit: boolean,
    date: Date,
    category: Category,
    account: Account
}