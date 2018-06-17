import * as utilities from "../../base/utilities";
// import Utilities } from "../../base/utilities";
import AccountModel  from "./accountModel";
import Account from './account'
import { Promise } from "mongoose";

// let utilities: Utilities = new Utilities();

export let getAll = (req, res, next) => {
    AccountModel.find((ex, data) => {
        // return Utilities.checkError(ex, data, res);
        return utilities.checkError(ex, data, res);
    })
};

export let getById = (req, res, next) => {
    let id = req.params.id;

    AccountModel.findById(id, (ex, account) => {
        return utilities.checkError(ex, account, res);
        // return this.utilities.checkError(ex, account, res);
    });
};

export let create = (req, res, next) => {
    let newTransaction = new AccountModel({
        name: req.body.name,
        initialValue: req.body.initialValue
    });

    //VALIDACIONES 
    this.validateFields(newTransaction, res)
    .then((result) =>{
        newTransaction.save((ex, account) => {
            return utilities.checkError(ex, account, res);
            // return this.utilities.checkError(ex, account, res);
        });
    })
    .catch((ex)=>{
        return utilities.checkError(ex, null, res);
    });

};

export let update = (req, res, next) => {
    let id = req.params.id;

    AccountModel.findByIdAndUpdate(id, req.body, { new: true }, (ex, account) => {
        return utilities.checkError(ex, account, res);
        // return this.utilities.checkError(ex, account, res);
    });
};

export let remove = (req, res, next) => {
    let id = req.params.id;

    AccountModel.findByIdAndRemove(id, (ex, account) => {
        return utilities.checkError(ex, account, res);
        // return this.utilities.checkError(ex, account, res);
    });
};

export let validateFields = function (account:Account, res) {
    let error:string = "";

    return new Promise((resolve, reject) => {
        if(account.initialValue < 0){
            error += "El valor debe ser mayor o igual a  0.";
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
//         AccountModel.find((ex, data) => {
//             // let check = utilities.chechError(ex, data);
//             // return res.status(check.status).json(check.result);

//             return Utilities.checkError(ex, data, res);
//             // return this.utilities.checkError(ex, data, res);
//         })
//     }

//     getById(req, res, next){
//         let id = req.params.id;

//         AccountModel.findById(id, (ex, account) => {
//             return Utilities.checkError(ex, account, res);
//             // return this.utilities.checkError(ex, account, res);
//         });
//     }

//     create(req, res, next){
//         let newTransaction = new AccountModel({
//             description: req.body.description,
//             value: req.body.value,
//             debitCredit: req.body.debitCredit,
//             date: req.body.date,
//             categoryId: req.body.categoryId,
//             accountId: req.body.accountId
//         });

//         //VALIDACIONES 
//         // TransactionController.validateFields('hola');

//         newTransaction.save((ex, account) => {
//             // let check = this.utilities.checkError(ex, account);
//             // return res.status(check.status).json(check.result);
            
//             return Utilities.checkError(ex, account, res);
//             // return this.utilities.checkError(ex, account, res);
//         });
//     }

//     update(req, res, next){
//         let id = req.params.id;
        
//         AccountModel.findByIdAndUpdate(id, req.body, { new: true }, (ex, account) => {
//             return Utilities.checkError(ex, account, res);
//             // return this.utilities.checkError(ex, account, res);
//         });
//     }

//     delete(req, res, next){
//         let id = req.params.id;

//         AccountModel.findByIdAndRemove(id, (ex, account) => {
//             return Utilities.checkError(ex, account, res);
//             // return this.utilities.checkError(ex, account, res);
//         });
//     }

//     validateFields(account){
//         console.log(account);
//     }
// }