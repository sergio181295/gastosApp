var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gastosApp', function(err) {
    if(err)
        throw err;

    console.log('Conectado a MongoDB...');
});

exports.mongoose = mongoose;
