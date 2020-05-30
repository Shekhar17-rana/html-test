var dat = new Date();
dat.setDate(1)

var day = dat.getDay();

var months_arr=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];

var endDate = new Date(dat.getFullYear(),dat.getMonth()+1,0).getDate();

document.getElementById("date_str").innerHTML = dat.toDateString();

document.getElementById("month").innerHTML = months_arr[dat.getMonth()];
var cells = "";


for(x=day; x>0;x--){
  cells += "<div>"+"i"+"</div>";
}

for(i=1; i<= 31; i++){
  cells += "<div>"+i+"</div>";
}

document.getElementsByClassName("days")[0].innerHTML = cells;
