var listImg = ['dave-peng.png', 'snap-peng.jpg', 'fez-peng.png'];

function init() {

}

function tryCloseWindows() {
   M.toast({html: '[SYSTEM MESSAGE]: Pengu\'s flippers not recognized. Can\'t close window.'});
}

function openTab(evt, tabId) {
  console.log("clicked on button " + evt + " to open " + tabId);

  var leftChoices = document.getElementsByClassName("leftChoices");
  var tabContent  = document.getElementsByClassName("tabContent");

  console.log(leftChoices);
  console.log(tabContent);
 //Hide all the contents first
 for(var i=0; i<tabContent.length; i++) {
   tabContent[i].style.display = "none";
 }

 //Remove all active tab choices
 for(var i=0; i<leftChoices.length; i++) {
   leftChoices[i].className = leftChoices[i].className.replace(" active","");
 }

 document.getElementById(tabId).style.display = "block";
 evt.path[0].className += " active";

}

function outputImages(path, col) {

  for(var i=0; i<listImg.length; i++) {
    var sNumber = 12/col;
    var img = '<img src="' + path + listImg[i] + '" class=" col s' + sNumber + ' materialboxed centered" width="200" /> \n';
    document.write(img);
  }

}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);

    var elemsT = document.querySelectorAll('.tooltipped');
    var instancesT = M.Tooltip.init(elemsT);
});
