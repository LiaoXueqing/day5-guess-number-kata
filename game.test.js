let GeneratorNumber = require("./generator_number.js");
let GuessNumberGame = require("./guess_number_game.js");
describe('Game',function(){
    it('should return right',function(){
        jest.spyOn(GeneratorNumber,"generate").mockReturnValue("1 2 3 4");
        expect(new GuessNumberGame().test("2 3 4 5")).toEqual("4A0B");
        expect(new GuessNumberGame().test("3 2 4 5")).toEqual("2A2B");
        // expect(new GuessNumberGame().test("2 3 4 5")).toEqual("4A0B");

    });
    // it('guess 6 times',function(){
    //     jest.spyOn(GeneratorNumber,"generate").mockReturnValue("1 2 3 4");

    //     for(let i=0;i<6;i++){
    //         expect(guessNumberGame.test("1 3 7 4")).toEqual("2A1B");
    //     }
    //     expect(guessNumberGame.test("1 3 7 4")).toEqual("Game Over!");
    // });
});
