`use strict`

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