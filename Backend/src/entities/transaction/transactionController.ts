import * as utilities from "../../base/utilities";
// import Utilities } from "../../base/utilities";
import Model  from "./transactionModel";
import Transaction from './transaction'
import { Promise } from "mongoose";

// let utilities: Utilities = new Utilities();

export let getAll = (req, res, next) => {
    Model.find((ex, data) => {
        // return Utilities.checkError(ex, data, res);
        return utilities.checkError(ex, data, res);
    })
};

export let getById = (req, res, next) => {
    let id = req.params.id;

    Model.findById(id, (ex, transaction) => {
        return utilities.checkError(ex, transaction, res);
        // return this.utilities.checkError(ex, transaction, res);
    });
};

export let create = (req, res, next) => {
    let newTransaction = new Model({
        description: req.body.description,
        value: req.body.value,
        debitCredit: req.body.debitCredit,
        date: req.body.date,
        categoryId: req.body.categoryId,
        accountId: req.body.accountId
    });

    //VALIDACIONES 
    this.validateFields(newTransaction, res)
    .then((result) =>{
        newTransaction.save((ex, transaction) => {
            return utilities.checkError(ex, transaction, res);
            // return this.utilities.checkError(ex, transaction, res);
        });

    })
    .catch((ex)=>{
        return utilities.checkError(ex, null, res);
    });

};

export let update = (req, res, next) => {
    let id = req.params.id;

    Model.findByIdAndUpdate(id, req.body, { new: true }, (ex, transaction) => {
        return utilities.checkError(ex, transaction, res);
        // return this.utilities.checkError(ex, transaction, res);
    });
};

export let remove = (req, res, next) => {
    let id = req.params.id;

    Model.findByIdAndRemove(id, (ex, transaction) => {
        return utilities.checkError(ex, transaction, res);
        // return this.utilities.checkError(ex, transaction, res);
    });
};

export let validateFields = function (transaction:Transaction, res) {
    let error:string = "";

    return new Promise((resolve, reject) => {
        if(transaction.value <= 0){
            error += "El valor debe ser mayor de 0.";
        }

        if(error.length > 0){
            reject(error);
        }
        resolve();
    });
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
//         Model.find((ex, data) => {
//             // let check = utilities.chechError(ex, data);
//             // return res.status(check.status).json(check.result);

//             return Utilities.checkError(ex, data, res);
//             // return this.utilities.checkError(ex, data, res);
//         })
//     }

//     getById(req, res, next){
//         let id = req.params.id;

//         Model.findById(id, (ex, transaction) => {
//             return Utilities.checkError(ex, transaction, res);
//             // return this.utilities.checkError(ex, transaction, res);
//         });
//     }

//     create(req, res, next){
//         let newTransaction = new Model({
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
        
//         Model.findByIdAndUpdate(id, req.body, { new: true }, (ex, transaction) => {
//             return Utilities.checkError(ex, transaction, res);
//             // return this.utilities.checkError(ex, transaction, res);
//         });
//     }

//     delete(req, res, next){
//         let id = req.params.id;

//         Model.findByIdAndRemove(id, (ex, transaction) => {
//             return Utilities.checkError(ex, transaction, res);
//             // return this.utilities.checkError(ex, transaction, res);
//         });
//     }

//     validateFields(transaction){
//         console.log(transaction);
//     }
// }