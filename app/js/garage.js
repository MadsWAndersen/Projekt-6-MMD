
//Show hidden popup for bil 1
function popupSlet() {
  var popup = document.getElementById("slet");
  popup.classList.toggle("show");
}

//Show hiiden popup for bil 2
function popupSlet2() {
  var popup2 = document.getElementById("slet2");
  popup2.classList.toggle("show");
}
//Slet kort 1
  let fjernKort1 = function(fjern1) {
    let cardElement = document.getElementById(fjern1);
  cardElement.parentNode.removeChild(cardElement);
 }

 //Slet kort 2
   let fjernKort2 = function(fjern2) {
     let cardElement = document.getElementById(fjern2);
   cardElement.parentNode.removeChild(cardElement);
  }
