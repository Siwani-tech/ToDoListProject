

var enterButton= document.getElementById("enter");
var input=document.getElementById("userInput");
var ul=document.querySelector('ul');
var item=document.getElementsByTagName('li');


function inputLen(){
    return input.ariaValueMax.length;
}
function listLen(){
    return item.length;
}
function createlist(){
    var li=document.createElement('li');//create element li
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}
function cross(){
    li.classList.toggle('done');
}
li.addEventListener("click",cross);


var dbtn=document.createElement('button');
dbtn.appendChild(document.createTextNode('X'));
li.appendChild(dbtn);
dbtn.addEventListener("click",deleteListItem);

function deleteListItem(){
    li.classList.add("delete")
}

function addlistafterclick(){
    if(inputLen()>0){
        createlist();
    }
}

function addListafterkeypress(event){
    if(inputLen()>0 && event.which===13){
        createlist();
    }
}
enterButton.addEventListener("click",addlistafterclick);

input.addEventListener("keypress",addListafterkeypress);