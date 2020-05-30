 var dat = new Date();

function RenderDate(){
 
dat.setDate(1);

var day = dat.getDay();

var months_arr=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];

var endDate = new Date(dat.getFullYear(),dat.getMonth()+1,0).getDate();

var prevDate = new Date(dat.getFullYear(),dat.getMonth(),0).getDate();
var today = new Date();

document.getElementById("date_str").innerHTML = dat.toDateString();

document.getElementById("month").innerHTML = months_arr[dat.getMonth()];
var cells = "";


for(x=day; x>0;x--){
  cells += "<div class='prev_date'>"+(prevDate-x+1)+"</div>";
}

for(i=1; i<= 31; i++){
  if(i == today.getDate() && dat.getMonth() == today.getMonth()){
    cells += "<div class='today'>"+i+"</div>";
  }
   else{
     cells += "<div>"+i+"</div>";
   }
}

document.getElementsByClassName("days")[0].innerHTML = cells;
}
  
function moveDate(para){
 if(para == 'prev'){
   dat.setMonth(dat.getMonth()-1);
  RenderDate()}
 
 else if(para == 'next'){
  dat.setMonth(dat.getMonth()+1);
  }
 RenderDate();
 
}
