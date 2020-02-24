console.log("又来了！！！")

// function add(n1, n2) {
function add(n1:number, n2:number) {
  return n1 + n2;
}

// const number1 = '5';
const number1 = 5;
const number2 = 2.8

const result = add(number1, number2);
console.log(result)

let isTrue = true;
// isTrue="siring";
// let isTrue: boolean = true;

let total: number = 0
let firstName: string = "阿莱克斯";
let sentence: string = `我叫${firstName}`;

const person = {
  name: "阿莱克斯",
  age: 30
}
// const person: {
//   name: string,
//   age: number
// } = {
//   name: "阿莱克斯",
//   age: 30
// }
console.log(person)
// console.log(person.nickname)

// array 
let list1: number[] = [1,2,3,4]
let list2: Array<number> = [1,2,3,4]
let list3 = [1,2,3,4]
let list4 = [1, "d"]
let list5: any[] = [1, "d", true] 

// tuple 
let person1: [number, string] = [1, "阿莱克斯"]
let students: [number, string][] = [[1, "阿莱克斯"], [2, "莱克斯"], [3, "克斯"], [4, "斯"]];
// person1[2] = "3"
person1.push(2)
console.log(person1)
let person2 = [1, "阿莱克斯"]

// union
let union : number | string
union = 2
union = "字符串"
// union = true
let union2: number | string | boolean | string[]

// Literature type
let value1: 1 | 2
value1 = 1
value1 = 2
// value1 = 3
let value2: 1 | "2" | 3 | true 

// enum
enum Color {red, green, blue}
let color = Color.blue
console.log(color)
enum Color2 {red=5, green, blue}
enum Color3 {red=5, green=7, blue=9}
enum Color4 {red=5, green="heihei", blue="lala"}

// any
let randomValue: any = 666;
randomValue = true
randomValue = "string"
randomValue = {}
let username: string
username = randomValue
randomValue.toUpperCase();
randomValue();
console.log(randomValue.myName)

// let ddd: any = require("lodash")

// unkonw
let randomValue2: unknown = 666;
randomValue2 = true
randomValue2 = "string"
randomValue2 = {}
// username = randomValue2
// console.log(randomValue2.myName)
// randomValue2();
// randomValue2.toUpperCase();
if(typeof randomValue2 === 'string') {
  username = randomValue2
}
(randomValue2 as string).toUpperCase();
if(typeof randomValue2 === 'function') {
  randomValue2();
}
console.log((randomValue2 as any).myName)

// void, undefined & never
function printResult() {
// function printResult(): void 
  console.log("lalala")
}
console.log(printResult())

// undefined
function printResult2(): undefined {
  console.log("lalala")
  return;
}

// never
function throwError(message: string, errorCode: number): never {
  throw { message, errorCode }
  // while(true) { }
}
throwError("not found", 404);

// type converting
let message;
message = "abc"
let endWithC = message.endsWith('c');
// let endWithC = (<string>message).endsWith('c');
// let endWithC = (message as string).endsWith('c');