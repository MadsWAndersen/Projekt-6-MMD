let dt = new Date();

let months = ["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"]



document.getElementById("date_string").innerHTML = dt.toDateString();
document.getElementById("month").innerHTML = months[dt.getMonth()];


let cells = "";
const date = new Date();
const currentDay = date.getDate();
//Udkommenteret er en anden måde at skrive ovenstående på
// const currentDay = (new Date()).getDay();

for (i = 1; i<=30; i++){


  // udkommenteret er en anden måde at skrive det nedenunder på
  // const dateClass = i === currentDay ? 'today' : '';

  let dateClass = '';

  if (i === currentDay) {
    dateClass = 'today';
  }

	cells+= '<div class="nemlig ' + dateClass + '">' + i + "</div>";
}








document.getElementsByClassName('kalenderwrapper')[0].innerHTML = cells;
