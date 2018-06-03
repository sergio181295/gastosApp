var manejarError = function (err, obj) {
    if (err) {
        console.error(err);
        return err
    } else {
        return obj;
    }
}

exports.manejarError = manejarError;