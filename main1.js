var form=document.getElementById('my-form');
console.log(form);
form.addEventListener('submit',addDetails);
window.addEventListener('DOMContentLoaded',loadUser);
function addDetails(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var mobile=document.getElementById('mobile').value;
    var myObj={
        name,
        email,
        mobile
    };
    localStorage.setItem(email,JSON.stringify(myObj));
    showUser(myObj);
  

};
function showUser(user){
    var users=document.getElementById('userDetails');
    const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
    <button onclick=deleteUser('${user.email}')> Delete User </button>
    <button onclick=editUserDetails('${user.email}','${user.name}','${user.mobile}')>Edit User </button>
 </li>`

    users.innerHTML=users.innerHTML+childHTML;
};

function loadUser() {
    var myObjloaded;
    var keys = Object.keys(localStorage);
    for(var i=0;i<keys.length;i++){
        myObjloaded=JSON.parse(localStorage.getItem(keys[i]));
        showUser(myObjloaded);
    }
}
function deleteUser(email){
    localStorage.removeItem(email);
    removeFromScreen(email);
}

function removeFromScreen(email){
    let userDetails=document.getElementById('userDetails');
    const childNodeToBeDeleted = document.getElementById(email);
    console.log(childNodeToBeDeleted);
    if(childNodeToBeDeleted) {
        userDetails.removeChild(childNodeToBeDeleted);
    }
}
function editUserDetails(emailId, name, phonenumber){

    document.getElementById('email').value = emailId;
    document.getElementById('name').value = name;
    document.getElementById('mobile').value =phonenumber;

    deleteUser(emailId);
 }