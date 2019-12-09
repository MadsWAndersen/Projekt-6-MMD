

//Delete card
  let removeCard = function(cardId) {
    let cardElement = document.getElementById(cardId);
  cardElement.parentNode.removeChild(cardElement);
 }
