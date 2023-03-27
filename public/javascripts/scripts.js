/* Custom scripts go here */
console.log("Custom scripts starting");
function getYearFunc() {
  console.log("getYearFunc called.");
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("year").innerHTML = n;
}
document.getElementById("footer-main").addEventListener("load", getYearFunc);
    