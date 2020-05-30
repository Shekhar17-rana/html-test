 
var dat1 = new Date();
function RenderDate(){

dat1.setDate(1);

var day = dat1.getDay();

var months_arr=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];

var endDate = new Date(dat1.getFullYear(),dat1.getMonth()+1,0).getDate();

var prevDate = new Date(dat1.getFullYear(),dat1.getMonth(),0).getDate();
var today = new Date();

document.getElementById("date_str").innerHTML = dat1.toDateString();

document.getElementById("month").innerHTML = months_arr[dat1.getMonth()];
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
   dat1.setMonth(dat1.getMonth()-1);
  RenderDate()}
 
 else if(para == 'next'){
  dat1.setMonth(dat1.getMonth()+1);
  
  }
 RenderDate();
 
}
