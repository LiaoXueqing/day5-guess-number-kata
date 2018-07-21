
'use strict';

let GeneratorNumber = require("./generator_number.js");
let generator = new GeneratorNumber();
class GuessNumberGame{
    constructor(){
        this.guessCount=0;
        this.answer = generator.generate(4);
        this.history = [];
    }
    test(inputs){
        this.guessCount++;
        let checkInfo = this.checkGuessNumber(inputs);
        if(!checkInfo){
            return "Wrong Input,Input Again!";
        }
        let guessArray = inputs.trim().split(" ").map((item)=>parseInt(item));
        let result = this.compareAnswer(guessArray,this.answer);
        console.log(this.guessCount);
        if(this.guessCount == 6){
            result += "\nGame Over!"
        }

        this.history.push("random:"+this.answer+"    input :"+inputs+"     result:"+result);
        console.log(this.history);
        return result;
    }
    compareAnswer(guessArray,answer){
        let countA = 0;
        let countB = 0;
        for(let i=0;i<guessArray.length;i++){
            if (guessArray[i] == answer[i]){ 
                countA++;
            } else {
                if(answer.indexOf(guessArray[i])!=-1) countB++;
            }
        }
        // console.log(`${countA}A${countB}B`);
        return `${countA}A${countB}B`;
    }   
    checkGuessNumber(inputs){
        let arr = inputs.split(" ");
        let set = new Set(arr);
        if(set.size!=4) return false;
        let reg = /^\d{4}$/;
        return reg.test(arr.join(""));
    }
    // generate(n){
    //     return "1 2 3 4";
    //     let set = new Set();
    //     while(set.size<4){
    //         set.add(this.generateOneNumber(0,9));
    //     }
    //     return [...set]; 
    // }

    // generateOneNumber(min,max){
    //     return Math.floor(Math.random()*(max-min+1)+min);
    // }
}

module.exports = GuessNumberGame;
