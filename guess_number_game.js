
class GuessNumberGame{
    constructor(){
    }
    test(inputs,answer){
        let checkInfo = this.checkGuessNumber(inputs);
        if(!checkInfo){
            return false;
        }
        let guessArray = inputs.trim().split(" ").map((item)=>parseInt(item));
        console.log(`guessArray:${guessArray}`);
        return this.compareAnswer(guessArray,answer);
        
    }
    compareAnswer(guessArray,answer){
        let countA = 0;
        let countB = 0;
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
