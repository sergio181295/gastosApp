import * as mongoose from 'mongoose';

const schema = mongoose.Schema;

const accountSchema = new schema({
    name: {
        type: String, 
        required: true
    },
    initialValue:{
        type: Number, 
        required: true,
        default: 0.00
    }
});

export default mongoose.model('AccountModel', accountSchema); 