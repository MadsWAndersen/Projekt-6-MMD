let p1 = document.getElementById('page1');
let p2 = document.getElementById('page2');
// let overblik = document.getElementById('overblik');


let startingX;

function p1handleTouchStart(evt) {
  startingX = evt.touches[0].clientX;

}

function p1handleTouchMove(evt) {
  let touch = evt.touches[0];
  let change = startingX - touch.clientX;
  // let start = overblik.left;
  if (change < 0) {
    return;
  }
  p1.style.left = "-" + change + "px";
  // overblik.style.left = "-" + change + "px";
  p2.style.display = "block";
  p2.style.left = (screen.width - change) + "px";
  evt.preventDefault();
}


function p1handleTouchEnd(evt) {
  let change = startingX - evt.changedTouches[0].clientX;
  let threshold = screen.width / 3;
  if (change < threshold) {
    p1.style.left = 0;
    p2.style.left = "100%";
    p2.style.display = 'none';
  } else {
    p1.style.transition = 'all .5s';
    p2.style.transition = 'all .5s';
    // overblik.style.transition = 'all .5s';
    // overblik.style.left = '-100%';
    p1.style.left = '-100%';
    p2.style.left = '0';
    p2.style.display = 'block';



  }
}

function p2handleTouchStart(evt) {
  startingX = evt.touches[0].clientX;
  p1.style.transition = '';
  p2.style.transition = '';
  p1.style.display = 'none';
}

function p2handleTouchMove(evt) {
  let touch = evt.touches[0];
  let change = touch.clientX - startingX;
  if (change < 0) {
    return;
  }
  p1.style.display = "grid";
  p1.style.left = (change - screen.width) + "px";
  p2.style.left = change + "px";
  evt.preventDefault();
}

function p2handleTouchEnd(evt) {
  let change = evt.changedTouches[0].clientX - startingX;
  let half = screen.width / 4;
  if (change < half) {
    p1.style.left = "-100%";
    p1.style.display = "none";
    p2.style.left = "0";
  } else {
    p1.style.transition = "all .5s";
    p2.style.transition = "all .5s";
    p1.style.left = "0";
    p2.style.left = "100%";
    p2.style.display = "none";

  }
};
