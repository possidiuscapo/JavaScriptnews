`use strict`

interface Duck {
    name: string,
    swim(): string,
}

class Thing implements Duck {
    name : string;
    swim(): string {
        return "Nage comme un canard";
    }
}
const nag = new Thing()
console.log(nag.swim());

/*
interface Shape {
    getArea: () => number;
  }
  
  class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
  
  const myRect = new Rectangle(10,20);
  
  console.log(myRect.getArea());
  */