
// console.dir(document);
// console.log(document.URL);
// console.log(document.all[22]);
// const header=document.getElementById('main-header');
// header.style.borderBottom="solid 3px #000";

// const addItems=document.getElementsByTagName('h2');
// addItems[0].style.fontWeight="bold";
// addItems[0].style.color="green";

const items=document.getElementsByClassName('list-group-item');
console.log(items);

items[0].textContent='Hello';
items[0].style.fontWeight='bold';

for(var i=0;i<items.length;i++){
    items[i].style.background='#f4f4f4';
}

