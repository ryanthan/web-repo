// Change quote machine with random quote from API
// Inspirational quotes API: https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373
// I have used fetch with APIs a lot in my current job so I did not get help from a specific source
function changeQuote() {
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        var randomIndex = Math.floor(Math.random()*data.length); // Get random index, help from: https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
        
        // Change quote and author on quote machine
        document.getElementById("quote").innerHTML = data[randomIndex].text;
        document.getElementById("quoteAuthor").innerHTML = data[randomIndex].author;
    }).catch(function(error) {
        console.log("Error getting quotes from API! Using default quote.");
        document.getElementById("quote").innerHTML = "There is nothing like a dream to create the future.";
        document.getElementById("quoteAuthor").innerHTML = "Victor Hugo";
    });
}

// Vertical tab menu:
var imageIndex = 0;

function openDayTab(evt, dayOfWeek) {
    var i, tabcontent, tablinks;

    // Hide all other menu items while not active
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // If tab is not active, change the class name
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Display selected tab and change it to "active"
    document.getElementById(dayOfWeek).style.display = "block";
    evt.currentTarget.className += " active";

    // Change header image by cycling through image array
    var header = document.getElementById("header");
    var images = [
        "assets/mountains.jpg", 
        "assets/mountains2.jpg", 
        "assets/mountains3.jpg", 
        "assets/mountains4.jpg", 
        "assets/mountains5.jpg", 
        "assets/mountains6.jpg", 
        "assets/mountains7.jpg", 
        "assets/mountains8.jpg",
        "assets/mountains9.jpg", 
        "assets/mountains10.jpg", 
        "assets/mountains11.jpg",
        "assets/mountains12.jpg",
        "assets/mountains13.jpg", 
        "assets/mountains14.jpg", 
        "assets/mountains15.jpg"];
    header.style.backgroundImage = "url(" + images[imageIndex] + ")";
    if (imageIndex >= images.length - 1) {
        imageIndex = 0;
    } else {
        imageIndex++;
    }

    // Call function to change quote
    changeQuote();
}


// Open tab corresponding to current day of the week
var currentDayNum = new Date().getDay(); // Help from: https://www.w3schools.com/jsref/jsref_getday.asp
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var currentDayOfWeek = daysOfWeek[currentDayNum];

var tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
    if (tablinks[i].innerHTML == currentDayOfWeek) {
        tablinks[i].id += "currentDay";
        break;
    }
}
document.getElementById("currentDay").click(); // Open tab with id "currentDay"


// Collapsibles:
var coll = document.getElementsByClassName("collapsible");

// Add click event listener to display or hide collapsible content to each collapsible
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("open");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}