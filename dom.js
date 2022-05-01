
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

// var container=document.querySelector('.container');
// container.style.borderBottom='solid 4px #ccc';

// var title=document.querySelector('input');
// title.value='Hello';

// var submit=document.querySelector('input[type="submit"]');
// submit.value='send';

// var item=document.querySelector('.list-group-item');
// item.style.backgroundColor='red';

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.backgroundColor="yellow";

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor='orange';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');
// console.log(odd);
// console.log(even);
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='#f4f4f4';
//     even[i].style.backgroundColor='#ccc'
// }

// var list=document.querySelector('#items');
// list.parentElement.style.backgroundColor='#f4f4f4';
// list.parentNode.style.backgroundColor='#ccc';
// console.log(list.childNodes);
// console.log(list.children);
// list.children[0].textContent="Hello 1";
// console.log(list.firstChild);
// console.log(list.firstElementChild);
// console.log(list.lastChild);
// console.log(list.lastElementChild);
// list.lastElementChild.textContent="Hello 4";

var newDiv=document.createElement('div');
newDiv.className="hello";
newDiv.id="hello1";
newDiv.setAttribute('title','Hello Div');
var newText=document.createTextNode('Hello WOrld');
newDiv.appendChild(newText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);

var items=document.querySelector('#items');
var newList=document.createElement('li');
var newText1=document.createTextNode('Hello WOrld');
newList.className="list-group-item";
newList.appendChild(newText1);
var li=document.querySelector('li');
items.insertBefore(newList,li);








