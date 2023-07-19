`user strict`

abstract class Music {
    //  instrument: string;
    constructor(protected _instrument: string){  }
    abstract makeSound():string;

    play(): string {
        return "play music";
    }
}

class Guitar extends Music {
    constructor(instrument:string){
        super(instrument)
    }
    makeSound(){ 
        return this._instrument
    }

    get instrument() : string {
        return this.instrument;
    }
    
}

const instru = new Guitar("Piano")
console.log(instru.play())