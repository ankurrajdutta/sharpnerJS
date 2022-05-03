var form=document.getElementById('my-form');
var users=document.getElementById('users');
form.addEventListener('submit',addDetails);
let count=0;
function addDetails(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var myObj={
        kay_name:name,
        kay_email:email
    }
   
    localStorage.setItem('myObj'+name,JSON.stringify(myObj));
    count++;
    var myObj_deserialized=JSON.parse(document.getEle)

    var li=document.createElement('li');
    li.appendChild(document.createTextNode())
}

// const myObj={
//     name:"ankur",
//     age: 24
// };

// let myObj_serialized=JSON.stringify(myObj);
// localStorage.setItem('myObj',myObj_serialized);
// console.log(localStorage);

// let myObj_deserialized=JSON.parse(localStorage.getItem("myObj"));
// console.log(myObj_deserialized);