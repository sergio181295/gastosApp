import * as utilities from "../../base/utilities";
// import Utilities } from "../../base/utilities";
import Model from "./categoryModel";
import Category from './category'
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

    Model.findById(id, (ex, category) => {
        return utilities.checkError(ex, category, res);
        // return this.utilities.checkError(ex, category, res);
    });
};

export let create = (req, res, next) => {
    let newCategory= new Model({
        name: req.body.name,
        description: req.body.description
    });

    //VALIDACIONES 
    this.validateFields(newCategory, res)
    .then((result) =>{
        newCategory.save((ex, category) => {
            return utilities.checkError(ex, category, res);
            // return this.utilities.checkError(ex, category, res);
        });
    })
    .catch((ex)=>{
        return utilities.checkError(ex, null, res);
    });

};

export let update = (req, res, next) => {
    let id = req.params.id;

    Model.findByIdAndUpdate(id, req.body, { new: true }, (ex, category) => {
        return utilities.checkError(ex, category, res);
        // return this.utilities.checkError(ex, category, res);
    });
};

export let remove = (req, res, next) => {
    let id = req.params.id;

    Model.findByIdAndRemove(id, (ex, category) => {
        return utilities.checkError(ex, category, res);
        // return this.utilities.checkError(ex, category, res);
    });
};

export let validateFields = function (category:Account, res) {
    let error:string = "";

    return new Promise((resolve, reject) => {

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

//         Model.findById(id, (ex, category) => {
//             return Utilities.checkError(ex, category, res);
//             // return this.utilities.checkError(ex, category, res);
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

//         newTransaction.save((ex, category) => {
//             // let check = this.utilities.checkError(ex, category);
//             // return res.status(check.status).json(check.result);
            
//             return Utilities.checkError(ex, category, res);
//             // return this.utilities.checkError(ex, category, res);
//         });
//     }

//     update(req, res, next){
//         let id = req.params.id;
        
//         Model.findByIdAndUpdate(id, req.body, { new: true }, (ex, category) => {
//             return Utilities.checkError(ex, category, res);
//             // return this.utilities.checkError(ex, category, res);
//         });
//     }

//     delete(req, res, next){
//         let id = req.params.id;

//         Model.findByIdAndRemove(id, (ex, category) => {
//             return Utilities.checkError(ex, category, res);
//             // return this.utilities.checkError(ex, category, res);
//         });
//     }

//     validateFields(category){
//         console.log(category);
//     }
// }