`user strict`

abstract class Music {
    //  instrument: string;
    abstract makeSound():string;
    constructor(protected _instrument: string){  }

    play(): string {
        return "play music";
    }
}

class Guitar extends Music {
    constructor(instrument:string){
        super(instrument)
    }
    makeSound():  {
        
    }
    get instrument() : string {
        return this.instrument;
    }
    
}

const instru = new Guitar("Piano")
console.log(instru.play())