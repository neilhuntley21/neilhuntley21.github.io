document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);

function scriptTest() {
    alert("Hey this script is running!");
}
$(function() {
    console.log(location.pathname);
    console.log(location.pathname.split("/").splice(-1));
    const pathname = String(location.pathname.split("/").splice(-1));
    const links = {
        "1": {
            "url": "index.html",
            "text": "Home",
            "alt": "Example Homepage"
        },
        "2": {
            "url": "template.html",
            "text": "Template Page",
            "alt": "Template Link"
        },
        "3": {
            "url": "tables.html",
            "text": "HTML Tables",
            "alt": "Simple and Complex Table Demonstration"
        }
    };

    const linkSeparator = " | ";
    let htmlString = "";

    for (let id in links) {
        if (pathname === links[id]['url']) {
            htmlString += links[id]['text'];
        } else {
            htmlString += '<a href="' + links[id]['url'] + '">' + links[id]['text'] + '</a>';

        }
        if (Number(id) < Object.keys(links).length) {
            htmlString += linkSeparator

        }
    }

    $('#siteLinks').html(htmlString);

});

function date() {
    let currDate = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let year = currDate.getFullYear();
    let monthDay = currDate.getDate()
    let month = months[currDate.getMonth()];
    let day = days[currDate.getDay()];
    let hours = currDate.getHours();
    let minutes = currDate.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let daynight = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    let time = hours + ":" + minutes + daynight;
    document.getElementById('demo').innerHTML = "Today is: " + time + " " + "on " + day + ", " + month + " " + monthDay + ", " + year;

}

function info() {
    let name = document.getElementById('inputname').value;
    let feeling = document.getElementById('inputfeeling').value;
    document.getElementById('outputsurvey').innerHTML = "Huntley Web and Co welcomes you, " + name + "! We're glad you're doing " + feeling + "!";

}
function weather() {
    let weatherarr = new Array("sunny", "partly cloudy", "cloudy", "rainy", "snowy");
    let random = weatherarr = weatherarr[Math.floor(Math.random() * weatherarr.length)];
    document.getElementById("theweather").innerHTML = "It is " + random + " outside. Wonderful weather we're having.";
}
function addTwoNums() {
    let firstnum = document.getElementById('numone').value;
    let secondnum = document.getElementById('numtwo').value;
    let sum = +firstnum + +secondnum;
    document.getElementById('sum').value = sum;

}
function calcSalary() {
    let hoursWorked = document.getElementById('hours').value;
    let payPerHour = document.getElementById('pay').value;
    let yearsWorked = document.getElementById('years').value;
    let total = +hoursWorked * payPerHour * (1.05 ** yearsWorked);
    total = Math.round(total * 100) / 100;
    document.getElementById('salary').value = total;
}
function calcGas() {
    let gasCost = document.getElementById('cost').value;
    let amountOfGas = document.getElementById('amount').value;
    let totalMiles = document.getElementById('miles').value;
    let highPrice = +gasCost > 4 ? "Gas prices these days!" : "Gas not too bad today!"
    let milesPerGallon = +totalMiles / +amountOfGas;
    milesPerGallon = Math.round(milesPerGallon * 100) / 100;
    document.getElementById('mpg').value = milesPerGallon;
    document.getElementById('price').innerHTML = "You paid " + "$" + (+gasCost * +totalMiles) + " for gas. " + highPrice;

}


