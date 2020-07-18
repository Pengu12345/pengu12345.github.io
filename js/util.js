var listImg = ['dave-peng.png', 'snap-peng.jpg', 'fez-peng.png'];

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
});
