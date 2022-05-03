// var form=document.getElementById('my-form');
// form.addEventListener('submit',addDetails);

// function addDetails(e){
//     e.preventDefault();
//     var name=document.getElementById('name').value;
//     var email=document.getElementById('email').value;
//     localStorage.setItem('name',name);
//     localStorage.setItem('email',email);
// }

const myObj={
    name:"ankur",
    age: 24
};

let myObj_serialized=JSON.stringify(myObj);
localStorage.setItem('myObj',myObj_serialized);
console.log(localStorage);

let myObj_deserialized=JSON.parse(localStorage.getItem("myObj"));
console.log(myObj_deserialized);