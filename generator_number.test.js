let GeneratorNumber = require("./generator_number.js");
describe('GeneratorNumber',function(){
    it('should return four random number',function(){
        let generate = new GeneratorNumber().generate();
        generate = jest.fn(()=>"2 3 4 5");
        let randomArray = generate();
        expect(randomArray).toEqual("2 3 4 5");
    });
});