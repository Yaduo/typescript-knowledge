// 1.++++++++++++++++++++++++++++++++
const log = function(message) {
  console.log(message)
}

const log2 = (message) => {
  console.log(message)
}

// let drawPoint = (x, y) =>{
//   console.log({x, y})
// }

// let drawPoint = (point: Point) =>{
//   console.log({x: point.x, y: point.y})
// }

// drawPoint({x: 23, y: 113})
// drawPoint({x: "阿莱克斯", y: "刘老师"})
// drawPoint({wether:"干爽", temperature: "5oC"})

// interface Point {
//   x: number,
//   y: number
// }

// let getDistances = (a: Point, b: Point) => {
//   // ..... 
// }

// 2.++++++++++++++++++++++++++++++++
// class Point {
//   x: number;
//   y: number;

//   drawPoint = () => {
//     console.log("x: " + this.x + " y: " + this.y)
//   }

//   getDistances = (p: Point) => {
//     console.log(Math.pow(p.x-this.x, 2) + Math.pow(p.y-this.y, 2))
//   }
// }

// const point = new Point();
// point.x = 2
// point.y = 3
// point.drawPoint()



// 3.++++++++++++++++++++++++++++++++
// class Point {
//   x: number;
//   y: number;

//   // constructor(x: number, y:number) {
//   constructor(x?: number, y?:number) {
//     this.x = x;
//     this.y = y;
//   }

//   drawPoint = () => {
//     console.log("x: " + this.x + " y: " + this.y)
//   }

//   getDistances = (p: Point) => {
//     console.log(Math.pow(p.x-this.x, 2) + Math.pow(p.y-this.y, 2))
//   }
// }

// const point = new Point(2,3);
// point.drawPoint()
// const point2 = new Point();

// 4.++++++++++++++++++++++++++++++++
// class Point {
//   private x: number;
//   private y: number;

//   // constructor(x: number, y:number) {
//   constructor(x?: number, y?:number) {
//     this.x = x;
//     this.y = y;
//   }

//   drawPoint = () => {
//     console.log("x: " + this.x + " y: " + this.y)
//   }

//   getDistances = (p: Point) => {
//     console.log(Math.pow(p.x-this.x, 2) + Math.pow(p.y-this.y, 2))
//   }
// }

// const point = new Point(2,3);
// point.x = 5;
// point.drawPoint()
// const point2 = new Point();

// 5.++++++++++++++++++++++++++++++++
// class Point {
//   constructor(private x?: number, private y?:number) { 
//   }

//   drawPoint = () => {
//     console.log("x: " + this.x + " y: " + this.y)
//   }

//   getDistances = (p: Point) => {
//     console.log(Math.pow(p.x-this.x, 2) + Math.pow(p.y-this.y, 2))
//   }

//   getX = () => {
//     return this.x
//   }

//   setX = (value: number) => {
//     if(value < 0) {
//       throw new Error("value cannot less than zero.")
//     }
//     this.x = value
//   }
// }

// const point = new Point(2,3);
// const x = point.getX
// point.setX(10)
// point.drawPoint()
// const point2 = new Point();


// 6.++++++++++++++++++++++++++++
// class Point {
//   constructor(private x?: number, private y?:number) { 
//   }

//   drawPoint = () => {
//     console.log("x: " + this.x + " y: " + this.y)
//   }

//   getDistances = (p: Point) => {
//     console.log(Math.pow(p.x-this.x, 2) + Math.pow(p.y-this.y, 2))
//   }

//   get X(){
//     return this.x
//   }

//   set X(value: number){
//     if(value < 0) {
//       throw new Error("value cannot less than zero.")
//     }
//     this.x = value
//   }
// }

// const point = new Point(2,3);
// const x = point.X
// point.X = 10
// point.drawPoint()
// const point2 = new Point();

// 7.+++++++++++++++++++++++++
class Point {
  constructor(private _x?: number, private y?:number) { 
  }

  drawPoint = () => {
    console.log("x: " + this.x + " y: " + this.y)
  }

  getDistances = (p: Point) => {
    console.log(Math.pow(p.x-this.x, 2) + Math.pow(p.y-this.y, 2))
  }

  get x(){
    return this.x
  }

  set x(value: number){
    if(value < 0) {
      throw new Error("value cannot less than zero.")
    }
    this.x = value
  }
}

const point = new Point(2,3);
const x = point.x
point.x = 10
point.drawPoint()
const point2 = new Point();