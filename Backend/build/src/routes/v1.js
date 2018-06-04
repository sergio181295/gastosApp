"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transactionController_1 = require("../entities/transaction/transactionController");
var transactionController = new transactionController_1.TransactionController();
exports.default = (function (app) {
    var apiRoutes = express.Router();
    //TRANSACTIONS ROUTES
    var transactionRoutes = express.Router();
    transactionRoutes.get('/', transactionController.getAll);
    transactionRoutes.get('/:id', transactionController.getById);
    transactionRoutes.post('/', transactionController.create);
    transactionRoutes.put('/:id', transactionController.update);
    transactionRoutes.delete('/:id', transactionController.delete);
    apiRoutes.use('/transactions', transactionRoutes);
    app.use('/api', apiRoutes);
});
//# sourceMappingURL=v1.js.map