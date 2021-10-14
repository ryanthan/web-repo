//Vertical tab menu:
function openDayTab(evt, dayOfWeek) {
    var i, tabcontent, tablinks;

    // Hide all other menu items while not active
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // If tab is not active, change the class
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Display selected tab and change it to "active"
    document.getElementById(dayOfWeek).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click(); // Open the tab labeled "defaultOpen"


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