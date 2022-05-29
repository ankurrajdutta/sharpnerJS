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

let mutiply=function (x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwo=mutiply(2);
multiplyByTwo(5);
