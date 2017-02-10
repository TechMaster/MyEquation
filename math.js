
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

    let sqrtDelta = Math.sqrt(delta);
    return [(-b + sqrtDelta) /(2 * a) , (-b - sqrtDelta) / (2 * a)];
}

exports.findY = (a,b,c,x) => {
    return a * x * x + b * x + c;
}