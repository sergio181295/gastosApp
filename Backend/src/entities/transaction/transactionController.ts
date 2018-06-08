// import * as utilities from "../../base/utilities";
import { Utilities } from "../../base/utilities";
// let utilities = require("../../base/utilities");
import  Transaction  from "./transactionModel";

let utilities: Utilities = new Utilities();

export let sayHello = (aName) => {
    console.log(aName);
};
export let saludar = () => {
    this.sayHello('Hola mundo !!!');
};

export let getAll = (req, res, next) => {
    this.validateFields('jds');
    Transaction.find((ex, data) => {
        // let check = utilities.chechError(ex, data);
        // return res.status(check.status).json(check.result);

        return Utilities.checkError(ex, data, res);
        // return this.utilities.checkError(ex, data, res);
    })
};

export let getById = (req, res, next) => {
    let id = req.params.id;

    Transaction.findById(id, (ex, transaction) => {
        return Utilities.checkError(ex, transaction, res);
        // return this.utilities.checkError(ex, transaction, res);
    });
};

export let create = (req, res, next) => {
    let newTransaction = new Transaction({
        description: req.body.description,
        value: req.body.value,
        debitCredit: req.body.debitCredit,
        date: req.body.date,
        categoryId: req.body.categoryId,
        accountId: req.body.accountId
    });

    //VALIDACIONES 
    // TransactionController.validateFields('hola');

    newTransaction.save((ex, transaction) => {
        // let check = this.utilities.checkError(ex, transaction);
        // return res.status(check.status).json(check.result);

        return Utilities.checkError(ex, transaction, res);
        // return this.utilities.checkError(ex, transaction, res);
    });
};

export let update = (req, res, next) => {
    let id = req.params.id;

    Transaction.findByIdAndUpdate(id, req.body, { new: true }, (ex, transaction) => {
        return Utilities.checkError(ex, transaction, res);
        // return this.utilities.checkError(ex, transaction, res);
    });
};

export let remove = (req, res, next) => {
    let id = req.params.id;

    Transaction.findByIdAndRemove(id, (ex, transaction) => {
        return Utilities.checkError(ex, transaction, res);
        // return this.utilities.checkError(ex, transaction, res);
    });
};

export let validateFields = (transaction) => {
    console.log(transaction);
};





////CLASE
// export class TransactionController  {

//     public utilities:Utilities;

//     constructor(){
//         this.utilities = new Utilities();
//     }

//     sayHello(aName) {
//         console.log(aName);
//     };
//     saludar() {
//         this.sayHello('Hola mundo !!!');
//     };
    
//     getAll(req, res, next) {
//         this.validateFields('jds');
//         Transaction.find((ex, data) => {
//             // let check = utilities.chechError(ex, data);
//             // return res.status(check.status).json(check.result);

//             return Utilities.checkError(ex, data, res);
//             // return this.utilities.checkError(ex, data, res);
//         })
//     }

//     getById(req, res, next){
//         let id = req.params.id;

//         Transaction.findById(id, (ex, transaction) => {
//             return Utilities.checkError(ex, transaction, res);
//             // return this.utilities.checkError(ex, transaction, res);
//         });
//     }

//     create(req, res, next){
//         let newTransaction = new Transaction({
//             description: req.body.description,
//             value: req.body.value,
//             debitCredit: req.body.debitCredit,
//             date: req.body.date,
//             categoryId: req.body.categoryId,
//             accountId: req.body.accountId
//         });

//         //VALIDACIONES 
//         // TransactionController.validateFields('hola');

//         newTransaction.save((ex, transaction) => {
//             // let check = this.utilities.checkError(ex, transaction);
//             // return res.status(check.status).json(check.result);
            
//             return Utilities.checkError(ex, transaction, res);
//             // return this.utilities.checkError(ex, transaction, res);
//         });
//     }

//     update(req, res, next){
//         let id = req.params.id;
        
//         Transaction.findByIdAndUpdate(id, req.body, { new: true }, (ex, transaction) => {
//             return Utilities.checkError(ex, transaction, res);
//             // return this.utilities.checkError(ex, transaction, res);
//         });
//     }

//     delete(req, res, next){
//         let id = req.params.id;

//         Transaction.findByIdAndRemove(id, (ex, transaction) => {
//             return Utilities.checkError(ex, transaction, res);
//             // return this.utilities.checkError(ex, transaction, res);
//         });
//     }

//     validateFields(transaction){
//         console.log(transaction);
//     }
// }