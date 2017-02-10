const readSync = require("readline-sync");
var plotly = require('plotly')('NguyenPham','a9xrs6TPswbOrLPQ3Ywl');
var fs = require('fs');
const math = require("./math");
const log = console.log;

let getInput = (ques) => {
    let input = readSync.question(ques);
    return parseFloat(input);
}

let drawGraph = () => {
    let a,b,c,result,x1,x2;
    try{
        a = getInput("Enter a");
        b = getInput("Enter b");
        c = getInput("Enter c");
    }
    catch(err){
        log(err);
        return;
    }
    try{
        result = math.equation(a,b,c);
        log(`Phương trình có 2 nghiệm : x1 = ${result[0]} và x2 = ${result[1]}`);
        x1 = result.pop() - 5;
        x2 = result.pop() + 5;
        let temp = x1, listX = [], listY = [], count = 0.1; 
        while(temp < x2){
            listY.push(math.findY(a,b,c,temp));
            listX.push(temp);
            temp += count;
        }
        var trace1 = {
        x: listX,
        y: listY,
        type: "scatter"
        };

        var figure = { 'data': [trace1] };

        var imgOpts = {
            format: 'png',
            width: 1000,
            height: 500
        };

        plotly.getImage(figure, imgOpts, function (error, imageStream) {
            if (error) return console.log (error);

            var fileStream = fs.createWriteStream('1.png');
            imageStream.pipe(fileStream);
        });
    }
    catch(err){
        log(err);
        return;
    }  
}
drawGraph();
