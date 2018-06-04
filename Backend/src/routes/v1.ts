import * as express from 'express';

import { TransactionController } from "../entities/transaction/transactionController";

let transactionController = new TransactionController();

export default (app) => {
    const apiRoutes = express.Router();
    
    //TRANSACTIONS ROUTES
    const transactionRoutes = express.Router();
    
    transactionRoutes.get('/', transactionController.getAll);
    transactionRoutes.get('/:id', transactionController.getById);
    transactionRoutes.post('/', transactionController.create);
    transactionRoutes.put('/:id', transactionController.update);
    transactionRoutes.delete('/:id', transactionController.delete);
    
    apiRoutes.use('/transactions', transactionRoutes);

    app.use('/api', apiRoutes);
}