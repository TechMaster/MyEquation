
const log = console.log;
//phương trình có dạng : ax2 + bx + c = 0 (a != 0)
exports.equation = (a,b,c) => {

    if(isNaN(a) || isNaN(b) || isNaN(c)){
        throw new Error("Input must be number");
    }

    if(parseFloat(a) === 0){
        throw new Error("equation infinity");
    }

    let delta = b * b - 4 * a * c;

    if(delta < 0){
        throw new Error("equation infinity");
    }

    else if(delta === 0){
        let x = -b / (2 * a);
        console.log(`equation have 2 values equally x1 = x2 = ${x}`);
        return x;
    }
    
    else{
        let sqrt = Math.sqrt(delta);
        log('equation have 2 different values');
        return [(-b + sqrt) / 2 * a, (-b - sqrt) / 2 * a];
    }
}