// // import debug = require('debug');
// import express = require('express');
// import path = require('path');
// import { clas1 } from './class1';
// var app = express();
// let clase = new clas1();
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
// app.use(express.static(path.join(__dirname, 'public')));
// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     var err = new Error('Not Found');
//     err['status'] = 404;
//     next(err);
// });
// // error handlers
// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//     app.use((err: any, req, res, next) => {
//         res.status(err['status'] || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }
// clase.saludar();
// // production error handler
// // no stacktraces leaked to user
// app.use((err: any, req, res, next) => {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });
// app.set('port', process.env.PORT || 3000);
// var server = app.listen(app.get('port'), function () {
//     debug('Express server listening on port ' + 300);
// });
//# sourceMappingURL=app.js.map