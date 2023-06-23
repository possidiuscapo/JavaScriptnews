function convertCtoF(conv) {
    let fahrenheit;
    fahrenheit = conv * 9/5 +32;
    return fahrenheit;
}
convertCtoF();

let cel = (prompt("Donner le nombre celsius"))
let convert = convertCtoF(cel)
console.log(convert)
