import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    description: {
        type: String, 
        required: true
    },
    value:{
        type: Number, 
        required: true
    }, 
    debitCredit:{
        type: Boolean, 
        required: true
    }, 
    date:{
        type: Date, 
        required: true,
        default: new Date()
    }, 
    category:{
        type: Schema.Types.ObjectId,
        ref: "CategoryModel",
        required: true
    }, 
    account:{
        type: Schema.Types.ObjectId, 
        ref: "AccountModel",
        required: true
    },
});

export default mongoose.model('TransactionModel', transactionSchema); 