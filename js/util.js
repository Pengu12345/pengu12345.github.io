var listImg = ['dave-peng.png', 'snap-peng.jpg', 'fez-peng.png'];

function outputImages(path) {

  for(var i=0; i<listImg.length; i++) {
    var img = '<img src="' + path + listImg[i] + '" class="materialboxed" width="200" /> \n';
    document.write(img);
  }

}

var elem = document.querySelector('.tabs');
var instance = M.Tabs.init(elem);

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
});
