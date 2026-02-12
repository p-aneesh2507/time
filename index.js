function clock(){
    var date=new Date();
   var hour=date.getHours();
   var minute=date.getMinutes();
   var second=date.getSeconds();
   if(hour<10){
    hour="0"+hour;
   }
      if(minute<10){
         minute="0"+minute;
   }
   second=second<10?"0"+second:second;

   document.getElementsByTagName("h1")[0].innerText=hour+":"+minute+":"+second;
}
btn=document.getElementById("title")
btn.addEventListener("click",function(){
   setInterval(clock,1000);
})
// clock();