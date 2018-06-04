import  Transaction  from "./transactionModel";

export class TransactionController {

    getAll(req, res, next) {
        Transaction.find((ex, data) => {
            if (ex) {
                res.status(500).json({ex});
            }
            res.status(200).json({data});
        })
    }

    getById(req, res, next){
        let id = req.params.id;

        Transaction.findById(id, (ex, transaction) => {
            if(ex){
                res.status(500).json({ex});
            }
            res.status(200).json({ transaction});
        });
    }

    create(req, res, next){
        let newTransaction = new Transaction({
            description: req.body.description,
            value: req.body.value,
            debitCredit: req.body.debitCredit,
            date: req.body.date,
            categoryId: req.body.categoryId,
            accountId: req.body.accountId
        });

        //VALIDACIONES 

        newTransaction.save((ex, transaction) => {
            if(ex){
                res.status(500).json({ex});
            }
            res.status(201).json({transaction});
        });
    }

    update(req, res, next){
        let id = req.params.id;
        
        Transaction.findByIdAndUpdate(id, req.body, { new: true }, (ex, transaction) => {
            if(ex){
                res.status(500).json({ex});
            }
            res.status(200).json({transaction});
        });
    }

    delete(req, res, next){
        let id = req.params.id;

        Transaction.findByIdAndRemove(id, (ex, transaction) => {
            if (ex) {
                res.status(500).json({ ex });
            }
            res.status(200).json({ transaction });
        });
    }
}