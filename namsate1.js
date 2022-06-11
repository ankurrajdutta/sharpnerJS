// var obj={num:2};

// var addToThis=function (a,b,c){
//     return this.num+a+b+c;
// }
// var arr=[1,2,3];
// console.log(addToThis.apply(obj,arr));
// // console.log(addToThis.call(obj,2));

// var bnd=addToThis.bind(obj);
// console.log(bnd(1,2,3));

// var student={age:20};
// var printAge=function(){
//     return this.age;
// }
// var bnd=printAge.bind(student);
// console.log(bnd());

// let multiply=function(x,y){
//     console.log(x*y);
// }
// let multiplyByTwo=multiply.bind(this,2);
// multiplyByTwo(5);

// let multiplyByThree=multiply.bind(this,3);
// multiplyByThree(5);

// let mutiply=function (x){
//     return function(y){
//         console.log(x*y);
//     }
// }
// let multiplyByTwo=mutiply(2);
// multiplyByTwo(5);

// for(let i=1;i<=5;i++){
//     setTimeout(function x(){
//         console.log(i);
//     },i*1000);
// }

// for(var i=1;i<=5;i++){
//     function y(x){
//         setTimeout(function(){
//             console.log(x)
//         },x*1000);
  
//     }
//     y(i);
// }

// //function decalaration
// function a(){
//     console.log('HI');
// }

// //function expression
// var b= function (){
//     console.log('Hello');
// }
// /* anonymous function- It cannot be used 
// independently.This is used along with function 
// expression or whenever we want to return something
// from a function

// function (){
//     console.log('Hello');
// }  */    

// function add(param1,param2) //Parameter
// {
//     console.log(param1+param2);

// }

// add(12,3); //arguments

// function addConstant(constant){
//     return (val)=>constant+val;
// }
// let constantAdded=addConstant(2);
// console.log(constantAdded(4));


// const radius=[1,2,3,4];

// const area=function (radius){
//     return Math.PI*radius*radius;
// }

// const calculateArea=function(radius,logic){
//     const output=[];
//     for(var i=0;i<radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }
// console.log(calculateArea(radius,area));

/*
---------------------------
// this.table='window table';
// const cleanTable=function(){
//     console.log(`cleaning ${this.table}`)
// }
// cleanTable();
// */


// // let johnsRoom={
// //     table: 'johns table',
// //     cleanTable(){
// //         console.log(`cleaning ${this.table}`);
// //     }
// // }
// // console.log(johnsRoom.cleanTable());

// // this.table='window table';
// // let johnsRoom={
// //    table: 'johns table',
// // }
// // const cleanTable=function(soap){
// //     console.log(`${this.table} using ${soap}`);
// // }
// // cleanTable.call(this,'some soap');
// // cleanTable.call(johnsRoom,'some soap');

// this.table='window table';
// const cleanTable=function(soap){
   
//     const innerFunction=function (_soap){
//         console.log(`cleaning ${this.table} using ${_soap}`);
//     }
//     innerFunction.call(this,soap);
// }
// cleanTable.call(this,'some soap');

// let createRoom=function(name){
//     this.table=`${name}s room` 
// }

// class createRoom{
//     constructor(name){
//         this.table=`${name}s room` 
//     }
// }
// createRoom.prototype.cleanTable=function(soap){
//     console.log(`cleaning ${this.table} using soap`);
// }
// const jillSRoom=new createRoom('jill');

/*
class student{
   static count=0;
   static countStudent(){
    return(student.count++);
}
   constructor(name,age,phoneNumber,boardMarks){
       this.name=name;
       this.age=age;
       this.boardMarks=boardMarks;
       this.phoneNumber=phoneNumber;
       student.countStudent();
   }
   
   eligible(){
       if(this.boardMarks>=40){
           console.log(`${this.name} age ${this.age} is eligible`);
       }
       else  if(this.boardMarks<40){
        console.log(`${this.name} age ${this.age} is not eligible`);
       }
   }
  
}
const Riya=new student('Riya',18,1234,34);
const Hiya=new student('Hiya',15,2345,35);
const Diya=new student('Diya',16,4567,60);
const Siya=new student('Siya',17,7891,70);
const Rooh=new student('Rooh',19,3456,80);
console.log(student.countStudent());
Riya.eligible();
Hiya.eligible();
Diya.eligible();
Siya.eligible();
Rooh.eligible();  */
const a=function(){
    this.val=1;
        this.val++;
        console.log(this.val);
    },1)
}
a();
