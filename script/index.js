let btnSort=document.querySelector('[data-sort]')
let inputField=document.querySelector('[data-input]')
let btnAdd=document.querySelector('[data-add]')
let display=document.querySelector('[data-display]')
let date=new Date();
let inputValues=[
    { 
    id:1,
    name:inputField.value,
createdDate:date,
completed:false
}
];

let userstorage=JSON.stringify(inputValues);

localStorage.setItem("TodoKey", (userstorage))

let parsedData=JSON.parse(localStorage.getItem("TodoKey"));

console.log(parsedData);

let newFilterdArr=[];

function addToDo(newValue){
    let newitem=newFilterdArr.push(parsedData);
for(let x of inputValues)
{
    console.log(x)
    x.name=newValue;
    x.createdDate.getDay();
    x.completed=false;
}
//Returns undef for now
inputValues.map(i =>{
    console.log(i);
    display.innerHTML=`
    <div class="tab">
    <input type="checkbox"/>
    <h4 class="li-name">${i.name}</h4>
    <button class="btn-remove">x</button>
    </div>
       `
});

console.log(newitem)

}
btnAdd.addEventListener('click',()=>addToDo(inputField.value))