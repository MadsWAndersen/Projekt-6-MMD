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


document.getElementById("month").innerHTML = months[dt.getMonth()];
document.getElementById("date_string").innerHTML = dt.toDateString();
