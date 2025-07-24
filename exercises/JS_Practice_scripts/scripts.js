// Create a String and an int variable below
let str = "String";
let num = 2;
// console.log the String value
console.log(str);
// console.log the int * 2
console.log(num*2);

// Create a function that will double the inputted number
function double_num(num) {
    return num * 2;
}
    
// console.log the function with a chosen value as a parameter
let input_num = prompt("Type in a number: ");
console.log(double_num(input_num));

// build an object of yourself with 3 properties
const person = {
    name: "Bob", 
    age: 23, 
    height: 6
}

// console.log your name
console.log(person.name)

 /* create variables for an unordered list of HTML elements
 (one ul, and three li) */
 let list = document.createElement("ul");
 let listItem1 = document.createElement("li");
 let listItem2 = document.createElement("li");
 let listItem3 = document.createElement("li");
 //insert the object properties through innerText into the li elements
listItem1.innerText = person.name;
listItem2.innerText = person.age;
listItem3.innerText = person.height;

//append the list items to the ul
list.append(listItem1, listItem2, listItem3);


// display these within the <div class="collector">
let div = document.querySelector(".collector");
div.appendChild(list);