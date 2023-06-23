function factorialize(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    num = fact
    return num;
}
console.log(factorialize(5));
console.log(factorialize(2));
console.log(factorialize(20));
console.log(factorialize(10));
console.log(factorialize(50));