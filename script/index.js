let btnSort=document.querySelector('[data-sort]')
let inputField=document.querySelector('[data-input]')
let btnAdd=document.querySelector('[data-add]')
let display=document.querySelector('[data-display]')
let date=new Date();
function todoList(id,name,createdDate,completed){
    this.id=id;
    this.name=name;
    this.createdDate=createdDate;
    this.completed=completed;
}

let array=new todoList()

localStorage.setItem('items',JSON.stringify(array))
array=JSON.parse(localStorage.getItem('items'))

let a=array.map((item,index)=>{
    console.log(item);
    console.log(index);
   return 

   display.innerHTML=
   





})

btnAdd.addEventListener('click', todoList)