"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transactionController = require("../entities/transaction/transactionController");
exports.default = (function (app) {
    var apiRoutes = express.Router();
    //TRANSACTIONS ROUTES
    var transactionRoutes = express.Router();
    transactionController.saludar();
    transactionRoutes.get('/', transactionController.getAll);
    transactionRoutes.get('/:id', transactionController.getById);
    transactionRoutes.post('/', transactionController.create);
    transactionRoutes.put('/:id', transactionController.update);
    transactionRoutes.delete('/:id', transactionController.remove);
    apiRoutes.use('/transactions', transactionRoutes);
    app.use(apiRoutes);
});
// import { TransactionController } from "../entities/transaction/transactionController";
// let transactionController = new TransactionController();
// export default (app) => {
//     const apiRoutes = express.Router();
//     //TRANSACTIONS ROUTES
//     const transactionRoutes = express.Router();
//     transactionController.saludar();
//     transactionRoutes.get('/', transactionController.getAll);
//     transactionRoutes.get('/:id', transactionController.getById);
//     transactionRoutes.post('/', transactionController.create);
//     transactionRoutes.put('/:id', transactionController.update);
//     transactionRoutes.delete('/:id', transactionController.delete);
//     apiRoutes.use('/transactions', transactionRoutes);
//     app.use(apiRoutes);
// }
//# sourceMappingURL=v1.js.map