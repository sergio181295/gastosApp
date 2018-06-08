"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction = /** @class */ (function () {
    function Transaction(descripcion, valor, debitoCredito, fecha, categoriaId, cuentaIdId) {
        this.descripcion = descripcion;
        this.valor = valor;
        this.debitoCredito = debitoCredito;
        this.fecha = fecha;
        this.categoriaId = categoriaId;
        this.cuentaIdId = cuentaIdId;
    }
    return Transaction;
}());
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map