let GeneratorNumber = require('generator_number.js');
class GuessNumberGame{
    constructor(){

    }
    test(inputs){
        // let answer = [1,2,3,4];
        let answer = GeneratorNumber.generate(4);
        let countA = 0;
        let countB = 0;
        let checkInfo = this.checkGuessNumber(inputs);
        if(!checkInfo) return "Wrong Input,Input Again!";
        let guessArray = inputs.split(" ").map(item=>parseInt(item));
        for(let i=0;i<guessArray.length;i++){
            if(guessArray[i]==answer[i]){ 
                countA++;
            }else{
                if(answer.indexOf(guessArray[i])!=-1) countB++;
            }
        }
        return `${countA}A${countB}B`;
    }   
    checkGuessNumber(inputs){
        let arr = inputs.split(" ");
        let set = new Set(arr);
        if(set.size!=4) return false;
        let reg = /^\d{4}$/;
        return reg.test(arr.join(""));
    }
}

module.exports = GuessNumberGame;
