const date = new Date();

let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();

let currentDate = `${month}-${day}-${year}`;
let dateHTML = document.getElementById("date");
dateHTML.innerHTML=currentDate;