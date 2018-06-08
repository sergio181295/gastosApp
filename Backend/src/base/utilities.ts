export class Utilities {

    // static checkError(ex, obj){
    //     if(ex){
    //         return {status: 500, result: ex};
    //     }
    //     return { status: 500, result: obj };
    // }

    static checkError(ex, obj, res) {
        if (ex) {
            return res.status(500).json({ex})
        }
        return res.status(200).json({ obj });
    }
}