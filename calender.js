var dat = new Date();

document.getElementById("date_str").innerHTML = dat.toDateString();

var months_arr=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];

document.getElementById("month").innerHTML = months_arr[dat.getMonth()];
