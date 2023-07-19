`use strict`;
class Queue {
    constructor() {
        this.reverseArray = [];
    }
    push(a) {
        return this.reverseArray.push(a);
    }
    pop() {
        return this.reverseArray[0];
    }
}
let queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.pop());
class Queues {
    constructor() {
        this.reverseArray = [];
    }
    push(a) {
        return this.reverseArray.push(a);
    }
    pop() {
        return this.reverseArray[0];
    }
}
let queueArray = new Queues();
queueArray.push([1, 2]);
queueArray.push([3, 4]);
queueArray.push([5, 6]);
queueArray.push([7, 8]);
console.log(queueArray.pop());
