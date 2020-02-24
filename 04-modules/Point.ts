export class Point {
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