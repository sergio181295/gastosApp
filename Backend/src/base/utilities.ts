// export class Utilities {

//     static checkError(ex, obj, res) {
//         if (ex) {
//             return res.status(500).json({ex})
//         }
//         return res.status(200).json({ obj });
//     }
// }

export let checkError = function (ex, obj, res) {
    if (ex) {
        return res.status(500).json({ex})
    }
    return res.status(200).json({ obj });
};