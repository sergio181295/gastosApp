"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transactionModel_1 = require("./transactionModel");
var TransactionController = /** @class */ (function () {
    function TransactionController() {
    }
    TransactionController.prototype.getAll = function (req, res, next) {
        transactionModel_1.default.find(function (ex, data) {
            if (ex) {
                res.status(500).json({ ex: ex });
            }
            res.status(200).json({ data: data });
        });
    };
    TransactionController.prototype.getById = function (req, res, next) {
        var id = req.params.id;
        transactionModel_1.default.findById(id, function (ex, transaction) {
            if (ex) {
                res.status(500).json({ ex: ex });
            }
            res.status(200).json({ transaction: transaction });
        });
    };
    TransactionController.prototype.create = function (req, res, next) {
        var newTransaction = new transactionModel_1.default({
            description: req.body.description,
            value: req.body.value,
            debitCredit: req.body.debitCredit,
            date: req.body.date,
            categoryId: req.body.categoryId,
            accountId: req.body.accountId
        });
        //VALIDACIONES 
        newTransaction.save(function (ex, transaction) {
            if (ex) {
                res.status(500).json({ ex: ex });
            }
            res.status(201).json({ transaction: transaction });
        });
    };
    TransactionController.prototype.update = function (req, res, next) {
        var id = req.params.id;
        transactionModel_1.default.findByIdAndUpdate(id, req.body, { new: true }, function (ex, transaction) {
            if (ex) {
                res.status(500).json({ ex: ex });
            }
            res.status(200).json({ transaction: transaction });
        });
    };
    TransactionController.prototype.delete = function (req, res, next) {
        var id = req.params.id;
        transactionModel_1.default.findByIdAndRemove(id, function (ex, transaction) {
            if (ex) {
                res.status(500).json({ ex: ex });
            }
            res.status(200).json({ transaction: transaction });
        });
    };
    return TransactionController;
}());
exports.TransactionController = TransactionController;
//# sourceMappingURL=transactionController.js.map