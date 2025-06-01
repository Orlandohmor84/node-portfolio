/* Custom scripts go here */
console.log("Custom scripts starting");

function getYearFunc() {
  console.log("getYearFunc called.");
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("year").innerHTML = n;
}
document.getElementById("footer-main").addEventListener("load", getYearFunc);
  
/* Script for mega manu */
document.addEventListener("DOMContentLoaded", function(){
        /////// Prevent closing from click inside dropdown
        document.querySelectorAll('.dropdown-menu').forEach(function(element){
        	element.addEventListener('click', function (e) {
        		e.stopPropagation();
        	});
        })
    });