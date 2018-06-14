import * as express from 'express';

import * as transactionController from "../entities/transaction/transactionController";
import * as accountController from "../entities/account/accountController";

export default (app) => {
    const apiRoutes = express.Router();

    //TRANSACTIONS ROUTES
    const transactionsRoutes = express.Router();
    transactionsRoutes.get('/', transactionController.getAll);
    transactionsRoutes.get('/:id', transactionController.getById);
    transactionsRoutes.post('/', transactionController.create);
    transactionsRoutes.put('/:id', transactionController.update);
    transactionsRoutes.delete('/:id', transactionController.remove);

    apiRoutes.use('/transactions', transactionsRoutes);

    //ACCOUNTS ROUTES
    const accountsRoutes = express.Router();
    accountsRoutes.get('/', accountController.getAll);
    accountsRoutes.get('/:id', accountController.getById);
    accountsRoutes.post('/', accountController.create);
    accountsRoutes.put('/:id', accountController.update);
    accountsRoutes.delete('/:id', accountController.remove);

    apiRoutes.use('/accounts', accountsRoutes);

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