callXml();

function callXml() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  var newFileName = "content.xml?" + new Date().getTime();
  xhttp.open("GET", newFileName, true);
  xhttp.send();
};
function myFunction(xml) {
  
var bScore = Number(xml.responseXML.getElementsByTagName("BRADMAN")[0].childNodes[0].nodeValue);
var pScore = Number(xml.responseXML.getElementsByTagName("PERKINS")[0].childNodes[0].nodeValue);
var sScore = Number(xml.responseXML.getElementsByTagName("SAUVAGE")[0].childNodes[0].nodeValue);
var fScore = Number(xml.responseXML.getElementsByTagName("FREEMAN")[0].childNodes[0].nodeValue);
  
var graphTotal = bScore + pScore + sScore + fScore;
  
document.getElementById("bGraph").style.height = bScore / graphTotal * 150;
document.getElementById("pGraph").style.height = pScore / graphTotal * 150;
document.getElementById("sGraph").style.height = sScore / graphTotal * 150;
document.getElementById("fGraph").style.height = fScore / graphTotal * 150;

document.getElementById("bradmanScore").innerHTML = bScore;
document.getElementById("perkinsScore").innerHTML = pScore;
document.getElementById("sauvageScore").innerHTML = sScore;
document.getElementById("freemanScore").innerHTML = fScore;
  


}
setInterval( callXml, 1000);
