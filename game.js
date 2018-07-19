let GuessNumberGame = require("./guess_number_game.js");
let GeneratorNumber = require("./generator_number.js");
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('close', function() {
    process.exit(0);
});
let guessCount = 0;
class Game{
    constructor(){
    }
    startGame(){
        console.log("Guess Number Game, You have 6 chances to guess!");
        let answer = new GeneratorNumber().generate(4);
        console.log(`answer:${answer}`);
        this.getInput(answer);
    }
    getInput(answer){
        rl.on('line',function(inputs){
            guessCount++;
            let result = new GuessNumberGame().test(inputs,answer);
            if(result!=false){
                console.log(result);
                if(result=="4A0B"||guessCount==6){
                    console.log("Game Over!");
                    rl.close();
                    return ;
                }
            }else{
                console.log("Wrong Input,Input Again!"); 
            }
            
        });
    }
}
new Game().startGame();
