// let billeder = ['img/advarselslamper/gas.png', 'img/advarselslamper/heat.png', 'img/advarselslamper/seat.png']
// let show = document.getElementById('showcase');
//
// // Event handler //
//
// function changeImage(){
//   show.style.backgroundImage ="billeder[2]"
// }

function upDate(previewPic){
  let div = document.getElementById('placeholder');
  div.style.backgroundImage = "url('" + previewPic.src + "')";
  document.getElementById('alt-text').innerHTML = previewPic.alt;

}


var divItems = document.getElementsByClassName("knap1");

function selected(item) {
    this.clear();
    item.style.backgroundColor = 'red';
}

function clear() {
    for(var i=0; i < divItems.length; i++) {
        var item = divItems[i];
        item.style.backgroundColor = 'white';
    }
}
