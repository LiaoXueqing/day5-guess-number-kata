let GuessNumberGame = require("./guess_number_game.js");
describe('GuessNumberGame',function(){
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
});