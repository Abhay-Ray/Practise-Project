let month = document.getElementById("month");
let day = document.getElementById("day");
let date = document.getElementById("date");
let year = document.getElementById("year");

const now = new Date();

const monthNames =  ["January", "February", "March", "April", "May", "June",
                     "July", "August", "September", "October", "November", "December"]
month.textContent = monthNames[now.getMonth()]

const dayNames =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
day.textContent = dayNames[now.getDay()]
date.textContent = now.getDate();
year.textContent = now.getFullYear();