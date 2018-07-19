let GeneratorNumber = require("./generator_number.js");
let GuessNumberGame = require("./guess_number_game.js");
describe('Game',function(){
    it('should return right',function(){
        // let generate = new GeneratorNumber().generate();
        // generate = jest.fn(()=>"2 3 4 5");

        jest.spyOn(GeneratorNumber,"generate").mockReturnValue("1 2 3 4");


        expect(new GuessNumberGame().test("2 3 4 5")).toEqual("4A0B");
        expect(new GuessNumberGame().test("3 2 4 5")).toEqual("2A2B");
        // expect(new GuessNumberGame().test("2 3 4 5")).toEqual("4A0B");

    });
});
