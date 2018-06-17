// import Utilities } from "../../base/utilities";
import * as utilities from "../../base/utilities";
import { Promise } from "mongoose";

import Transaction from './transaction'
import Model  from "./transactionModel";

import AccountModel  from "../account/accountModel";
import CategoryModel  from "../category/categoryModel";

// let utilities: Utilities = new Utilities();

export let getAll = (req, res, next) => {
    Model.find((ex, data) => {
        // return Utilities.checkError(ex, data, res);
        return utilities.checkError(ex, data, res);
    })
};

export let getById = (req, res, next) => {
    let response: Response;
   
    try {
        let id = req.params.id;
        
        Model.findById(id, (ex, transaction) => {
            AccountModel.populate(transaction, { path: "account" }, (ex, transaction) => {
                if(ex){
                    throw ex;
                }
                
                CategoryModel.populate(transaction, { path: "category" }, (ex, transaction) => {
                    if (ex) {
                        throw ex;
                    }
                    response = utilities.checkError(ex, transaction, res);
                }); 
            }); 
        });

    } catch (ex) {
        response = res.status(500).json({ ex });
    }
    return response;
};

// export let getById = (req, res, next) => {
//     let response: Response;
//     // try {
//     let id = req.params.id;
//     let obj;

//     Model.findById(id, (ex, transaction) => {
//         AccountModel.populate(transaction, { path: "account" }, (ex, transaction) => {
//             // this.obj = transaction;
//             return this.utilities.checkError(ex, transaction, res);
//         });
//         // CategoryModel.populate(obj, { path: "category" }, (ex, transaction) => {
//         //     this.obj = transaction;
//         // }); 

//     });

//     // } catch (ex) {
//     //     response = res.status(500).json({ex});
//     // }
//     // return response;
// };

export let create = (req, res, next) => {
    console.log(req.body);
    
    let nuevo:Transaction = {
        description : req.body.description,
        value : req.body.value,
        debitCredit : req.body.debitCredit,
        date : req.body.date,
        category : req.body.category,
        account : req.body.account
    };

    let newTransaction = new Model({
        description: nuevo.description,
        value: nuevo.value,
        debitCredit: nuevo.debitCredit,
        date: nuevo.date,
        category: nuevo.category,
        account: nuevo.account
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