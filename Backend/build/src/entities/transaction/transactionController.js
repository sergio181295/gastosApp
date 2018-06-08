"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
// import * as utilities from "../../base/utilities";
var utilities_1 = require("../../base/utilities");
// let utilities = require("../../base/utilities");
var transactionModel_1 = require("./transactionModel");
var utilities = new utilities_1.Utilities();
exports.sayHello = function (aName) {
    console.log(aName);
};
exports.saludar = function () {
    _this.sayHello('Hola mundo !!!');
};
exports.getAll = function (req, res, next) {
    _this.validateFields('jds');
    transactionModel_1.default.find(function (ex, data) {
        // let check = utilities.chechError(ex, data);
        // return res.status(check.status).json(check.result);
        return utilities_1.Utilities.checkError(ex, data, res);
        // return this.utilities.checkError(ex, data, res);
    });
};
exports.getById = function (req, res, next) {
    var id = req.params.id;
    transactionModel_1.default.findById(id, function (ex, transaction) {
        return utilities_1.Utilities.checkError(ex, transaction, res);
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
    // TransactionController.validateFields('hola');
    newTransaction.save(function (ex, transaction) {
        // let check = this.utilities.checkError(ex, transaction);
        // return res.status(check.status).json(check.result);
        return utilities_1.Utilities.checkError(ex, transaction, res);
        // return this.utilities.checkError(ex, transaction, res);
    });
};
exports.update = function (req, res, next) {
    var id = req.params.id;
    transactionModel_1.default.findByIdAndUpdate(id, req.body, { new: true }, function (ex, transaction) {
        return utilities_1.Utilities.checkError(ex, transaction, res);
        // return this.utilities.checkError(ex, transaction, res);
    });
};
exports.remove = function (req, res, next) {
    var id = req.params.id;
    transactionModel_1.default.findByIdAndRemove(id, function (ex, transaction) {
        return utilities_1.Utilities.checkError(ex, transaction, res);
        // return this.utilities.checkError(ex, transaction, res);
    });
};
exports.validateFields = function (transaction) {
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
//# sourceMappingURL=transactionController.js.map