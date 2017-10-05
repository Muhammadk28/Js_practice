// select the single data type

var news = document.querySelector("#kayes");


var kinds = ["Data type", "Control Flow", "Function", "Variable", "Operator"];


var newa = "<h1>My first Js document</h1>";
newa = newa + "<p>We can divided the programming language 5 kinds  </p>";
for ( i = 0; i < kinds.length; i++) {
    newa = newa + "<li>" + kinds[i] + "</li>";
}
news.innerHTML = newa;

// using css in java script page

var unorder = document.querySelector("ul");
unorder.style.listStyle = "none";

var lista = document.querySelectorAll("ul li");

lista.style.cssFloat = "left";

var anchor = document.querySelectorAll("a");

anchor.style.textDecoration = "none";

anchor.style.color = "black";