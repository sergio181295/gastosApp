"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var utilities = require("../../base/utilities");
// import Utilities } from "../../base/utilities";
// let utilities = require("../../base/utilities");
var transactionModel_1 = require("./transactionModel");
var mongoose_1 = require("mongoose");
// let utilities: Utilities = new Utilities();
exports.getAll = function (req, res, next) {
    transactionModel_1.default.find(function (ex, data) {
        // return Utilities.checkError(ex, data, res);
        return utilities.checkError(ex, data, res);
    });
};
exports.getById = function (req, res, next) {
    var id = req.params.id;
    transactionModel_1.default.findById(id, function (ex, transaction) {
        return utilities.checkError(ex, transaction, res);
        // return this.utilities.checkError(ex, transaction, res);
    });
};
exports.create = function (req, res, next) {
    var newTransaction = new transactionModel_1.default({
        description: req.body.description,
        value: req.body.value,
        debitCredit: req.body.debitCredit,
        date: req.body.date,
        categoryId: req.body.categoryId,
        accountId: req.body.accountId
    });
    //VALIDACIONES 
    _this.validateFields(newTransaction, res)
        .then(function (result) {
        newTransaction.save(function (ex, transaction) {
            return utilities.checkError(ex, transaction, res);
            // return this.utilities.checkError(ex, transaction, res);
        });
    })
        .catch(function (ex) {
        return utilities.checkError(ex, null, res);
    });
};
exports.update = function (req, res, next) {
    var id = req.params.id;
    transactionModel_1.default.findByIdAndUpdate(id, req.body, { new: true }, function (ex, transaction) {
        return utilities.checkError(ex, transaction, res);
        // return this.utilities.checkError(ex, transaction, res);
    });
};
exports.remove = function (req, res, next) {
    var id = req.params.id;
    transactionModel_1.default.findByIdAndRemove(id, function (ex, transaction) {
        return utilities.checkError(ex, transaction, res);
        // return this.utilities.checkError(ex, transaction, res);
    });
};
exports.validateFields = function (transaction, res) {
    var error = "";
    return new mongoose_1.Promise(function (resolve, reject) {
        if (transaction.value < 0) {
            error += "El valor debe ser mayor de 0.";
        }
        if (error.length > 0) {
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
//         TransactionModel.find((ex, data) => {
//             // let check = utilities.chechError(ex, data);
//             // return res.status(check.status).json(check.result);
//             return Utilities.checkError(ex, data, res);
//             // return this.utilities.checkError(ex, data, res);
//         })
//     }
//     getById(req, res, next){
//         let id = req.params.id;
//         TransactionModel.findById(id, (ex, transaction) => {
//             return Utilities.checkError(ex, transaction, res);
//             // return this.utilities.checkError(ex, transaction, res);
//         });
//     }
//     create(req, res, next){
//         let newTransaction = new TransactionModel({
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
//         TransactionModel.findByIdAndUpdate(id, req.body, { new: true }, (ex, transaction) => {
//             return Utilities.checkError(ex, transaction, res);
//             // return this.utilities.checkError(ex, transaction, res);
//         });
//     }
//     delete(req, res, next){
//         let id = req.params.id;
//         TransactionModel.findByIdAndRemove(id, (ex, transaction) => {
//             return Utilities.checkError(ex, transaction, res);
//             // return this.utilities.checkError(ex, transaction, res);
//         });
//     }
//     validateFields(transaction){
//         console.log(transaction);
//     }
// }
//# sourceMappingURL=transactionController.js.map