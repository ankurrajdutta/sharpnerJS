
// console.dir(document);
// console.log(document.URL);
// console.log(document.all[22]);
// const header=document.getElementById('main-header');
// header.style.borderBottom="solid 3px #000";

// const addItems=document.getElementsByTagName('h2');
// addItems[0].style.fontWeight="bold";
// addItems[0].style.color="green";

// const items=document.getElementsByClassName('list-group-item');
// console.log(items);

// items[0].textContent='Hello';
// items[0].style.fontWeight='bold';

// for(var i=0;i<items.length;i++){
//     items[i].style.background='#f4f4f4';
// }

// const headerTitle=document.getElementById('header-title').textContent;
// console.log(headerTitle);

// const items1=document.getElementsByTagName('li');
// console.log(items1);
// for(var i=0;i<items1.length;i++){
//     items1[i].style.background='red';
// }

var container=document.querySelector('.container');
container.style.borderBottom='solid 4px #ccc';

var title=document.querySelector('input');
title.value='Hello';

var submit=document.querySelector('input[type="submit"]');
submit.value='send';

var item=document.querySelector('.list-group-item');
item.style.backgroundColor='red';

var lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.backgroundColor="yellow";




