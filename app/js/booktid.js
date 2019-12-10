let dt = new Date();
let options = { weekday: "short", year: "numeric", month: "short", day: "numeric"

}

document.getElementById('month').innerHTML = dt.toLocaleDateString("da-DK", options);
