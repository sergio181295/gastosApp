"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities = /** @class */ (function () {
    function Utilities() {
    }
    // static checkError(ex, obj){
    //     if(ex){
    //         return {status: 500, result: ex};
    //     }
    //     return { status: 500, result: obj };
    // }
    Utilities.checkError = function (ex, obj, res) {
        if (ex) {
            return res.status(500).json({ ex: ex });
        }
        return res.status(200).json({ obj: obj });
    };
    return Utilities;
}());
exports.Utilities = Utilities;
//# sourceMappingURL=utilities.js.map