import * as mongoose from 'mongoose';

const schema = mongoose.Schema;

const transactionSchema = new schema({
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
    categoryId:{
        type: Number, 
        required: true
    }, 
    accountId:{
        type: Number, 
        required: true
    },
});

export default mongoose.model('TransactionModel', transactionSchema); 