`user strict`

abstract class Music {
    protected _instrument: string;
    abstract makeSound():string;

    
    get value() : string {
        return 
    }
    
    play(): string {
        return "play music";
    }
}

class Guitar extends Music {
    
}