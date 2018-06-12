"use strict";
// export class Utilities {
Object.defineProperty(exports, "__esModule", { value: true });
//     static checkError(ex, obj, res) {
//         if (ex) {
//             return res.status(500).json({ex})
//         }
//         return res.status(200).json({ obj });
//     }
// }
exports.checkError = function (ex, obj, res) {
    if (ex) {
        return res.status(500).json({ ex: ex });
    }
    return res.status(200).json({ obj: obj });
};
//# sourceMappingURL=utilities.js.map