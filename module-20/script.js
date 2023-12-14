function myFunction() {
    var x = document.getElementById("menuButton").getAttribute("aria-expanded"); 
    if (x == "true") {x = "false"} 
    else {x = "true"}
    document.getElementById("menuButton").setAttribute("aria-expanded", x);
}