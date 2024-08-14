// TYPE ALIAS
//  let student = {
//      name : "hamza",
//      class : 2,
//      grade : 9,
//  }
//  console.log(student.name);
// type std = {
//    name : string,
//    age : number,
//    class: number,
//}
// let std50 : std = {
//     name : "hamza",
//     age : 15,
//     class : 9,
// // }
// let std51 : std = {
//     name : "ali",
//     age : 12,
//     class : 6,
// }
// //union
// let fname : String , number , boolean
// fname = "hamza"
// fname = 15
// fname = false
// let trafficlights : 'red' | 'green' | 'yellow'
// trafficlights  = `red` 
// trafficlights = `green`
// trafficlights = `yellow`
// console.log(trafficlights);
// intersection 
// type teacher = {
//     name : string
//     facid : number
//     salary : number
//     position : string
// }
// type std = {
//    name : string,
//    age : number,
//    class: number,
// }
// let person : teacher & std = {
//     name : "maryam",
//     facid : 4,
//     salary : 10000,
//     position : "teacher",
//     age : 15,
//     class : 9,
// }
// console.log(person);
// // Logic statement 
// if else
// else if
// nested if else
// ternory operators
// switch case
// let marks = 75;
// if (marks >= 90 && marks <= 100) {
//     console.log("Grade : A1+ ");
// }
// else if (marks >= 80 && marks <= 89) {
//     console.log("grade A+ ");
// }
// else if (marks >= 70 && marks <= 79) {
//     console.log("grade : A ");
// }
// else if (marks >= 60 && marks <= 69) {
//     console.log("grade : B");
// }
// else if (marks >= 50 && marks <= 59) {
//     console.log("grade ; C");
// }
// else if (marks >= 40 && marks <= 49) {
//     console.log("grade : D");
// }
// else {
//     console.log("Fail");
//}
// let day = "monday";
// if (true) {
//     if (day === "monday") {
//         console.log("Go to the work.");
//     }
//     else {
//         console.log("today is sunday");
//     }
//     if (day === "tuesday") {
//         console.log("this is second of week");
//     }
//     else {
//         console.log("today is a hot day");
//     }
//  }
// var raining = true; // barish ho rahi hai
// if (raining = true) {
//     console.log("wear a rain cot.");
// }
// else {
//     console.log("wear a sun glasses.");
// }
// var weather = "sunny";
// if (weather === "raining") {
//     console.log("wear a rain cot.");
// }
// else if (weather === "sunny") {
//     console.log("wear a sun glasses.");
// }
// else {
//     console.log("weather is cloudy");
// }
// var calculator;
// if (calculator === undefined) {
//     var num1 = 56;
//     var num2 = 78;
//     var num3 = num1 + num2;
//     console.log(`the sum of ${num1} and ${num2} is ${num3}`)
// }
// else {
//     console.log("invalid number");
// }
var myname = "hamza";
console.log(myname);
setTimeout(function () {
    console.log(myname);
}, 7000);
var myage = 45;
console.log("myage");
setTimeout(function () {
    console.log("myage");
}, 5000);
var myname1 = "ali";
console.log("myname1");
setTimeout(function () {
    console.log("myname1");
}, 1000);
function order() {
    setTimeout(function () {
        console.log("please wait");
    }, 4000);
}
order();
//call back
function prepare() {
    setTimeout(function () {
        console.log("please wait to pizza");
    }, 4000);
}
// // functions in typescript
// function add(x : number, y : number){
//     return x+y
// }
// console.log(add(4,8));
// // // array 
// let myname =[
//     "hamza","haris"
// ]
// console.log(myname);
// let num :number[]=[888,
//     22,
//     22,
//     2222222222
// ]
// console.log(num);
// let mixArray: any|unknown = ["hamza", 55, true]
// console.log(mixArray);
// let fruitarray =[
//     ["apple"],
//     ["mango", "sweet and yellow"],
//     ["peach","sweet and sour","orange and yellowish"],
// ]
// console.log(fruitarray);
// let person=[{
//     name: "hamza",
//     class:9,
//     enroll:true
// },
// {
//     name : "ali",
//     class : 7,
//     enroll : false
// }
// ]
// console.log(person);
// Anonymous function jis ka koi name nahi hota 
// let add1 = function(x: number ,y:number) {
//       console.log(x - y);
// }
// add1(8,5)
// immediately function
// (function(name :string) {
//     console.log(`my father name is${name}`);
//   }) ("amjad")
// Array
// let myfrndname1:string[]=["hamza","hammad","haris","ali"]
// console.log(myfrndname1[3]);
// console.log(myfrndname1);
// console.log(myfrndname1.length);
// Multi type Array
// let frndname2: (string|number|boolean)[]=[99999999,32,"hamza",true]
// console.log(frndname2[3]);
// console.log(frndname2);
// console.log(frndname2.length);
// Array of Array
// let matrix3:number[][]=[
//     [1,2,3,4
//     ],
//     [5,6,7,8,9],
//     [10,11]
// ]
// console.log(matrix3[2]);
// console.log(matrix3);
// console.log(matrix3.length);
// tuple Array
// let array :[string,number,boolean] =["hamza",32,true]
// console.log(array);
//using the generics
// let ali :Array<string>=[
//     "hamza",
//     "ali",
//     "hammad"
// ]
// console.log(ali.reverse());
//   simple function 
// function add(x:number,y:number) {
//     return (x + y)
// }
// console.log(add(5,8));
// Anonymous function
// let add1=function(x:number,y:number) {
//     return(x-y)
// }
//  console.log(add1(2,6));
// function box(name :string,...eidi :number[]) {
//     console.log(...eidi);
//     return name + eidi
// }
// console.log(box("hamza",100+60+200+150+30+10))
// ternory operator
// let student = true
// let message = student ? "student" : "not student"
// console.log(`yes, i am a student ${message}. `);
// switch case 
// let day = "monday"
// switch (day) {
//     case "sunday":
//         console.log("today is holyday");
//          break;
//         case "monday":
//             console.log("go to school");
//             break
//     default:
//         console.log("case not match");
//         break;
// }
