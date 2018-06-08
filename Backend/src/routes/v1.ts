import * as express from 'express';

import * as transactionController from "../entities/transaction/transactionController";

export default (app) => {
    const apiRoutes = express.Router();

    //TRANSACTIONS ROUTES
    const transactionRoutes = express.Router();
    transactionController.saludar();
    transactionRoutes.get('/', transactionController.getAll);
    transactionRoutes.get('/:id', transactionController.getById);
    transactionRoutes.post('/', transactionController.create);
    transactionRoutes.put('/:id', transactionController.update);
    transactionRoutes.delete('/:id', transactionController.remove);

    apiRoutes.use('/transactions', transactionRoutes);

    app.use(apiRoutes);
}






// import { TransactionController } from "../entities/transaction/transactionController";

// let transactionController = new TransactionController();

// export default (app) => {
//     const apiRoutes = express.Router();
    
//     //TRANSACTIONS ROUTES
//     const transactionRoutes = express.Router();
//     transactionController.saludar();
//     transactionRoutes.get('/', transactionController.getAll);
//     transactionRoutes.get('/:id', transactionController.getById);
//     transactionRoutes.post('/', transactionController.create);
//     transactionRoutes.put('/:id', transactionController.update);
//     transactionRoutes.delete('/:id', transactionController.delete);
    
//     apiRoutes.use('/transactions', transactionRoutes);

//     app.use(apiRoutes);
// }