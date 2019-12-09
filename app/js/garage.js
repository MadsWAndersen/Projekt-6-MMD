

//Delete card
  let removeCard = function(cardId) {
    let cardElement = document.getElementById(cardId);
  cardElement.parentNode.removeChild(cardElement);
 }


//Slet bil
function popupSlet() {
  var popup = document.getElementById("popupKey");
  popup.classList.toggle("show");
