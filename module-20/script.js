function myFunction() {
    var x = document.getElementById("menuButton").getAttribute("aria-expanded"); 
    if (x == "true") {
        x = "false"
        console.log("switch off")
    } 
    else {
        x = "true"
        console.log("switch on")
    }
    document.getElementById("menuButton").setAttribute("aria-expanded", x);
}