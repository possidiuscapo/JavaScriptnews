`user strict`;
class Music {
    constructor(_instrument) {
        this._instrument = _instrument;
    }
    play() {
        return "play music";
    }
}
class Guitar extends Music {
    constructor(instrument) {
        super(instrument);
    }
    get instrument() {
        return this.instrument;
    }
}
const instru = new Guitar("Piano");
console.log(instru);
// console.log(instru.instrument);
console.log(instru.play());
