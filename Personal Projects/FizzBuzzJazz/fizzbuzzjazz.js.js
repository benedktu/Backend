const FizzBuzzJazz = {
    factorOne: +this.prompt('First Factor:'),
    factorTwo: +this.prompt('Second Factor:'),
    factorThree: +this.prompt('Third Factor:'),
    startPoint: +this.prompt('Starting Value:'),
    maxNumber: +this.prompt('Max Number:'),
    output: [],
    
    run() {
       for (this.startPoint = 1; this.startPoint <= this.maxNumber; this.startPoint++) {
            if (this.startPoint % this.factorOne == 0 && this.startPoint % this.factorTwo == 0 && this.startPoint % this.factorThree == 0){
                this.output.push('fizz-buzz-jazz');
            } 
            else if (this.startPoint % this.factorOne == 0) {
                this.output.push('fizz');
            } else if (this.startPoint % this.factorTwo == 0) {
                this.output.push('buzz');
            } else if (this.startPoint % this.factorThree == 0) {
                this.output.push('jazz');
            } else {
                this.output.push(this.startPoint);
            }
        }     

        console.log(this.output);
    }
}

FizzBuzzJazz.run();