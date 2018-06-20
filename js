// set variables
var nameTagInput = document.getElementById("name");
var nameTagDisplay = document.getElementById("nameTagDisplay")

nameTagInput.addEventListener("keyup", function(event){
 var currentName = nameTagInput.value;

 nameTagDisplay.innerText = currentName;
                              }); 
