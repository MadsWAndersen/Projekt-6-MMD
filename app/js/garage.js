function popupSlet() {
  var popup = document.getElementById("slet");
  popup.classList.toggle("show");
}

//Delete card
  let removeCard = function(cardId) {
    let cardElement = document.getElementById(cardId);
  cardElement.parentNode.removeChild(cardElement);
 }
