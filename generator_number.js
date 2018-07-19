class GeneratorNumber{
    constructor(){

    }
    generate(n){
        let set = new Set();
        while(set.size<4){
            set.add(this.generateOneNumber(0,9));
        }
        return [...set]; 
    }

    generateOneNumber(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
}
module.exports = GeneratorNumber;