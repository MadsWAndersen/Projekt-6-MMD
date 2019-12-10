let dt = new Date();

let months = [
    "Januar",
    "Februar",
    "Marts",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "December"
]



document.getElementById("date_string").innerHTML = dt.toDateString();
document.getElementById("month").innerHTML = months[dt.getMonth()];

let cells = "";
for (i = 1; i<=30; i++){
	cells = "<div>" + i + "</div>";
}
document.getElementsByClassName('kalenderwrapper')[0].innerHTML = cells;
