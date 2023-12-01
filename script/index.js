// Selecting HTML elements
let btnAdd = document.querySelector('[data-add]');
let inputField = document.querySelector('[data-input]');
let display = document.querySelector('[data-display]');
let btnSort = document.querySelector('[data-sort]');

// Array to that will be used to store all the values that the user added
let inputValues = [];

// Function to scratch out text when the checkbox is clicked
function scratchOutText(todoId) {
//this piece of code is used to locate the HTMl element with a specific class
 let nameElement = document.querySelector(`.li-name-${todoId}`);
 

 if (nameElement) {

    //if the nameElement is found which we just declared above then what we need to do is toggle the text decoration style 
nameElement.style.textDecoration = nameElement.style.textDecoration === "line-through" ? "none" : "line-through";
}
}

// Function to display todos
function displayInput() {


 // Clear existing content
display.innerHTML = "";

 // Loop through each todo item
inputValues.forEach(todo => {


// this code will create the checkbox and the delete button once the add button is pressed 
display.innerHTML += `
<div class="tab">
<input type="checkbox" onchange="scratchOutText(${todo.id})"/>
<h4 class="li-name li-name-${todo.id}">${todo.name}</h4>
<button class="btn-remove" data-id="${todo.id}">x</button>
</div>
`;
});
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to add a new todo
function addToDo(newValue) {


 // Create a new todo object
let newTodo = {


//this code is referencing the array called input values and it increaes the length of the array by 1 everytime when a new value is added
//and assigns it to the value id 
id: inputValues.length + 1,


//the capitalizedFirstLetter is basically just calling the function which was declared where the first letter char(0) value which the user
// inserts is made into a capital letter
name: capitalizeFirstLetter(newValue),
createdDate: new Date(),
completed: false
};

// Add the new todo to the array
inputValues.push(newTodo);

// Save todos to localStorage
localStorage.setItem("TodoKey", JSON.stringify(inputValues));

// Display updated todos
displayInput();
}

// Event listener for adding a new todo
btnAdd.addEventListener('click', () => {
addToDo(inputField.value);
//so when adding 
// Clear input field after adding
inputField.value = ""; 
});


// This code which i added heres serves as the function that will be responsible for removing the input that the user inserts

function handleRemoveClick(event) {

//event is passed as a parameter in the function handleRemoveClick
 //target represents the the element that triggered the event. in this case its the element that was clicked

let removeButton = event.target.closest('.btn-remove');
 //The closest method is basically used to find the closest ancestor element that matche the 
//class function ".btn-remove"
if (removeButton) {
 const todoId = parseInt(removeButton.dataset.id);

// Filter out the todo with the specified id
inputValues = inputValues.filter(todo => todo.id !== todoId);

 // Save updated todos to localStorage
localStorage.setItem("TodoKey", JSON.stringify(inputValues));

// Display updated todos
displayInput();
}
}
display.addEventListener('click', handleRemoveClick);

//this is the sort function that will be responsible for organizing the values alphabetically 
function sortTodos() {
 inputValues.sort((a, b) => {
    //what this piece of code is doing is basically converted the the first letters of the word to upper case
let nameA = a.name.toUpperCase()
let nameB = b.name.toUpperCase()

//simple if statement but instead of using integers we are using string to compare the values
if (nameA < nameB) {
    //if it returns 1 then nameA should come before nameB
return -1
}
if (nameA > nameB) {

    //positive 1 indicates that nameA should be placed after nameB
 return 1
}

//this does just mean that the order will be the same
return 0
 })
 displayInput()
 // Refresh the displayed todos after sorting
}
// Event listener for the Sort button
btnSort.addEventListener('click', () => {
 sortTodos()
// Sort todos alphabetically when the Sort button is clicked
})

// Function to load todos on page load
function loadTodos() {
 // Retrieve stored todos from localStorage and parse them
 inputValues = JSON.parse(localStorage.getItem("TodoKey")) ?? [];

 // Display todos on the page
 displayInput();
}

// Call the loadTodos function when the page is loaded
//to retrieve the information from the browser window
window.addEventListener('load', loadTodos);