"use strict";

let GuessNumberGame = require("./guess_number_game.js");
let guessNumberGame = new GuessNumberGame();
let history = "status:<br/>";
document.getElementById("check").addEventListener('click',function(){
    let guessNumber = document.getElementById("guess").value;
    let result = guessNumberGame.test(guessNumber);
    history += result+"<br/>";
    document.getElementById("show").innerHTML =  history;
});