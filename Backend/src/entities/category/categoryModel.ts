import * as mongoose from 'mongoose';

const schema = mongoose.Schema;

const categorySchema = new schema({
    name: {
        type: String, 
        required: true
    },
    description:{
        type: String, 
        required: false
    }
});

export default mongoose.model('CategoryModel', categorySchema); 