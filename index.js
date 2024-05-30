

let timeInfo = document.getElementById("time-info");
let dateInfo = document.getElementById("day-info");

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];



setInterval(() => {
    let date = new Date();

    let currDate = date.getDate();
    let currMonth = months[date.getMonth()];
    let currYear = date.getFullYear().toString().padStart(4, '0');

    let currDay = days[date.getDay()];

    let currHours = date.getHours().toString().padStart(2, '0');
    let currMinutes = date.getMinutes().toString().padStart(2, '0');
    let currSeconds = date.getSeconds().toString().padStart(2, '0');


    timeInfo.innerHTML = `<h1>${currHours} : ${currMinutes} : ${currSeconds}</h1>`
    dateInfo.innerHTML = `<h4>${currDate}  ${currMonth}  ${currYear}  ${currDay} </h4>`
}, 1000)