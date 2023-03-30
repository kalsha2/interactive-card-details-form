console.log('Hello World');
var cont = document.querySelector(".btn");
cont.onclick = Submitted;

function Submitted() {
    var myform = document.querySelector(".theform");
    var thanks= document.querySelector(".Thanks")
    thanks.style.display = "none";
    myform.style.display = "block";

}