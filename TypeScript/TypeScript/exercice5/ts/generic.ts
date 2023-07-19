`use strict`

/*
enum Status {
    Published,
    Unpublished,
    Draft,
}

let state: Status;
state = Status.Draft;

function fusion<T>(a: T[], b: T[]): T[] {
    return a.concat(b);
}

let c = fusion(['a', 'b', 'c'], ['d', 'e']);
console.log(c);
*/
// interface Details {
//     reverseArray: number[]
//     i?: number;
// }

class Queue<N>{
    public reverseArray: N[] = [];

    push(a: N): number {
        return this.reverseArray.push(a);
    }
    pop(): N | undefined {
        return this.reverseArray.shift();
    }
}

let queue = new Queue<number>();

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

console.log(queue.pop());

let queueArray = new Queue<Array<number>>();

queueArray.push([1, 2]);
queueArray.push([3, 4]);
queueArray.push([5, 6]);
queueArray.push([7, 8]);

console.log(queueArray.pop());