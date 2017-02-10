const chai = require("chai");
const math = require("../math.js");
const should = chai.should();

describe("Test Equation",() => {
    it("Should throw error Input must be number",() => {
        (() =>{
            math.equation("abc",1,4)
        }).should.throw("Input must be number");
    });
    it("Should throw error equation infinity",() => {
        (() =>{
            math.equation(0,3,4)
        }).should.throw("equation infinity");
    });
    it("Should throw error equation infinity",() => {
        (() =>{
            math.equation(2,3,4)
        }).should.throw("equation infinity");
    });
    it("Should show equation have 2 values equally",() => {
        math.equation(1,4,4).should.equal(-2);
    });
    it("Should show equation have 2 different values ",() => {
        math.equation(1,4,3).should.eql([-1,-3]);
    });
});