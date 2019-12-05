
// Selecting all text elements //

var email = document.forms["vform"]["email"];
var phone = document.forms["vform"]["phone"];
var pass = document.forms["vform"]["pass"];

// Getting all error display objects //
var email_error = document.getElementById('email_error')
var phone_error = document.getElementById('phone_error')
var pass_error = document.getElementById('pass_error')


// Setting all event listeners //

email.addEventListener("blur", emailVerify, true);
phone.addEventListener("blur", phoneVerify, true);
pass.addEventListener("blur", passVerify, true);



// Validation function //

function Validate(){
  
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
