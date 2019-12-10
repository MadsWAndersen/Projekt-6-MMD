let dt = new Date();
function renderDate(){
let endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0 ).getDate();

let months = ["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"]



document.getElementById("date_string").innerHTML = dt.toDateString();
document.getElementById("month").innerHTML = months[dt.getMonth()];


let cells = "";
const currentDay = dt.getDate();
//Udkommenteret er en anden måde at skrive ovenstående på
// const currentDay = (new Date()).getDay();

for (i = 1; i<=endDate; i++){
  // udkommenteret er en anden måde at skrive det nedenunder på
  // const dateClass = i === currentDay ? 'today' : '';
  let dateClass = '';
  if (i === currentDay) {
    dateClass = 'today';
  }
  //tilføjer en div som child til 'kalenderwrapper'-classen i HTML.
	cells += '<div class="kald ' + dateClass + '">' +"<p>" + i + "</p>" + "</div>";
}


console.log(new Date);





document.getElementsByClassName('kalenderwrapper')[0].innerHTML = cells;

};


function moveDate(para) {
            if(para == "prev") {
                dt.setMonth(dt.getMonth() - 1);
            } else if(para == 'next') {
                dt.setMonth(dt.getMonth() + 1);
            }
            renderDate();
        }
