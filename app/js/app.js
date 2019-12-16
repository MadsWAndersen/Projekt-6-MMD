// BOOK TID // BOOK TID // BOOK TID // BOOK TID // BOOK TID

let dt = new Date();

function renderDate() {
  let endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
  let months = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"];

  document.getElementById("date_string").innerHTML = dt.toDateString();
  document.getElementById("month").innerHTML = months[dt.getMonth()];

  let cells = "";
  const currentDay = dt.getDate();
  //Udkommenteret er en anden måde at skrive ovenstående på
  // const currentDay = (new Date()).getDay();

  for (i = 1; i <= endDate; i++) {
    // udkommenteret er en anden måde at skrive det nedenunder på
    // const dateClass = i === currentDay ? 'today' : '';
    let dateClass = '';
    if (i === currentDay) {
      dateClass = 'today';
    }
    //tilføjer en div som child til 'kalenderwrapper'-classen i HTML.
    cells += '<div class="kald ' + dateClass + '">' + "<p>" + i + "</p>" + "</div>";
  }

  document.getElementsByClassName('kalenderwrapper')[0].innerHTML = cells;
}

function moveDate(para) {
  if (para == "prev") {
    dt.setMonth(dt.getMonth() - 1);
  } else if (para == 'next') {
    dt.setMonth(dt.getMonth() + 1);
  }
  renderDate();
}




// GARAGE // GARAGE // GARAGE// GARAGE // GARAGE // GARAGE // GARAGE

//Show hidden popup for bil 1
function popupSlet() {
  let popup = document.getElementById("slet");
  popup.classList.toggle("show");
}

//Show hidden popup for bil 2
function popupSlet2() {
  let popup2 = document.getElementById("slet2");
  popup2.classList.toggle("show");
}

//Show hidden popup for bil 1
function annuller() {
  let popup = document.getElementById("slet");
  popup.classList.toggle("show");
}

//Show hidden popup for bil 2
function annuller2() {
  let popup2 = document.getElementById("slet2");
  popup2.classList.toggle("show");
}

//Slet kort 1
function fjernKort1 (fjern1) {
  let cardElement = document.getElementById(fjern1);
  cardElement.parentNode.removeChild(cardElement);
};

//Slet kort 2
function fjernKort2 (fjern2) {
  let cardElement = document.getElementById(fjern2);
  cardElement.parentNode.removeChild(cardElement);
};




// LAMPER // LAMPER // LAMPER // LAMPER // LAMPER // LAMPER // LAMPER

// Select lamp function //
function upDate(previewPic) {
  let div = document.getElementById('placeholder');
  div.style.backgroundImage = "url('" + previewPic.src + "')";
  document.getElementById('alt-text').innerHTML = previewPic.alt;
}




// LOG-IND // LOG-IND  // LOG-IND  // LOG-IND  // LOG-IND  // LOG-IND  // LOG-IND

// Selecting all text elements //
function ValidateLogInd() {
  var email = document.forms["vform"]["email"];
  var pass = document.forms["vform"]["pass"];

  // Getting all error display objects //
  var email_error = document.getElementById('email_error');
  var pass_error = document.getElementById('pass_error');


  // Setting all event listeners //
  email.addEventListener("blur", emailVerify, true);
  pass.addEventListener("blur", passVerify, true);


  // email validation //
  if (email.value == "") {
    email_error.textContent = "E-mail påkrævet";
    email.focus();
    return false;
  }

  // password validation
  if (pass.value == "") {
    pass_error.textContent = "Adgangskode påkrævet";
    pass.focus();
    return false;
  }
}


// Event handler functions
function emailVerify() {
  if (email.value != "") {
    email_error.innerHTML = "";
    return true;
  }
}


function passVerify() {
  if (pass.value != "") {
    pass_error.innerHTML = "";
    return true;
  }
}



// OPRET-BRUGER // OPRET-BRUGER // OPRET-BRUGER // OPRET-BRUGER // OPRET-BRUGER

function signeLoop(i) {
  // for (i = 1; i <= 10; ++i)
  //   console.log(i);
}




// Selecting all text elements //
function ValidateSignUp() {
  var email = document.forms["vform"]["email"];
  var phone = document.forms["vform"]["phone"];
  var pass = document.forms["vform"]["pass"];

  // Getting all error display objects //
  var email_error = document.getElementById('email_error');
  var phone_error = document.getElementById('phone_error');
  var pass_error = document.getElementById('pass_error');

  // Setting all event listeners //
  email.addEventListener("blur", emailVerify, true);
  phone.addEventListener("blur", phoneVerify, true);
  pass.addEventListener("blur", passVerify, true);

  // email validation //
  if (email.value == "") {
    email_error.textContent = "E-mail påkrævet";
    email.focus();
    return false;
  }

  // Phone number validation//
  if (phone.value == "") {
    phone_error.textContent = "Telefon nummer påkrævet";
    phone.focus();
    return false;
  }

  // password validation
  if (pass.value == "") {
    pass_error.textContent = "Adgangskode påkrævet";
    pass.focus();
    return false;
  }
}

// Event handler functions
function emailVerify() {
  if (email.value != "") {
    email_error.innerHTML = "";
    return true;
  }
}

function phoneVerify() {
  if (phone.value != "") {
    phone_error.innerHTML = "";
    return true;
  }
}

function passVerify() {
  if (pass.value != "") {
    pass_error.innerHTML = "";
    return true;
  }
}




// MAIN // MAIN // MAIN // MAIN // MAIN // MAIN // MAIN // MAIN // MAIN // MAIN

const p1 = document.getElementById('page1');
const p2 = document.getElementById('page2');
let startingX;

function p1handleTouchStart(evt) {
  startingX = evt.touches[0].clientX;
}

function p1handleTouchMove(evt) {
  let touch = evt.touches[0];
  let change = startingX - touch.clientX;
  if (change < 0) {
    return;
  }
  p1.style.left = "-" + change + "px";
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
}

function arrayLoop() {
  let array = ["Dette", "er", "et", "eksempel", "på", "et", "loop"];
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    //Do something
  }
}
