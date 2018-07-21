let GuessNumberGame = require("./guess_number_game.js");
let GeneratorNumber = require("./generator_number.js");

describe('GuessNumberGame',function(){
    beforeAll(()=>{
        jest.spyOn(GeneratorNumber.prototype, "generate").mockReturnValue([1, 2, 3, 4]);
    });
    it('should return 4A0B for input 1 2 3 4 when answer is 1 2 3 4',function(){
        expect(new GuessNumberGame().test("1 2 3 4")).toEqual("4A0B");
    });
    it('should return 3A0B for input 1 2 3 5 when answer is 1 2 3 4',function(){
        expect(new GuessNumberGame().test("1 2 3 5")).toEqual("3A0B");
    });
    it('should return 3A0B for input 7 3 2 5 when answer is 1 2 3 4',function(){
        expect(new GuessNumberGame().test("7 3 2 5")).toEqual("0A2B");
    });
    it('should return 3A0B for input 1 3 7 4 when answer is 1 2 3 4',function(){
        expect(new GuessNumberGame().test("1 3 7 4")).toEqual("2A1B");
    });
    it('should return correct text',function(){
        expect(new GuessNumberGame().test("1 3")).toEqual("Wrong Input,Input Again!");
    });
    it('should return correct text',function(){
        expect(new GuessNumberGame().test("1 a b 4")).toEqual("Wrong Input,Input Again!");
    });
    it('should return correct text',function(){
        expect(new GuessNumberGame().test("1 1 3 4")).toEqual("Wrong Input,Input Again!");
    });
    it('should give 6 times',function(){
        let guessNumberGame = new GuessNumberGame();
        expect(guessNumberGame.test("7 3 2 5")).toEqual("0A2B");
        expect(guessNumberGame.test("7 3 2 5")).toEqual("0A2B");
        expect(guessNumberGame.test("7 3 2 5")).toEqual("0A2B");
        expect(guessNumberGame.test("7 3 2 5")).toEqual("0A2B");
        expect(guessNumberGame.test("7 3 2 5")).toEqual("0A2B");
        expect(guessNumberGame.test("7 3 2 5")).toEqual("0A2B\nGame Over!");
    });
});