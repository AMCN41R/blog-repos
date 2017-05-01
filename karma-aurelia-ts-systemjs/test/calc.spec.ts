import {expect} from "chai";
import {Calc} from "../src/calc";
describe("Calc tests", () => {

    describe("Add", () => {
    
        it("passing 2 positive numbers returns the expected result", () => {
            // arrange
            const sut = new Calc();
    
            // act
            const result = sut.add(2,5);
    
            // assert
            expect(result).to.equal(7);
        });
    
        it("passing 2 negative numbers returns the expected result", () => {
            // arrange
            const sut = new Calc();
    
            // act
            const result = sut.add(-2,-5);
    
            // assert
            expect(result).to.equal(-7);
        });
    });
});
