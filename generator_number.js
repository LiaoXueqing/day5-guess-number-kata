class GeneratorNumber{
    constructor(){

    }
    generate(n){
        let randomNumber = "";
        for(let i=0;i<n;i++){
            randomNumber+=this.generateOneNumber(0,9)+" ";
        }
        return randomNumber.trim();
    }
    generateOneNumber(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
}
module.exports = GeneratorNumber;