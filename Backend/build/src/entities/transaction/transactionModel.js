"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var schema = mongoose.Schema;
var transactionSchema = new schema({
    description: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    debitCredit: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: new Date()
    },
    categoryId: {
        type: Number,
        required: true
    },
    accountId: {
        type: Number,
        required: true
    },
});
exports.default = mongoose.model('Transaction', transactionSchema);
//# sourceMappingURL=transactionModel.js.map