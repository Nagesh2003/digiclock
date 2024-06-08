let clock=document.getElementById("clock");

 function updateclock(){
 let now=new Date();
 let hour=now.getHours().toString().padStart(2,0);
 let minutes=now.getMinutes().toString().padStart(2,0);
 let seconds=now.getSeconds().toString().padStart(2,0);

 let merdian=hour>=12?"PM":"AM";
hour=hour%12 || 12;
let tiemstring= `${hour}:${minutes}:${seconds} ${merdian}`;
clock.textContent=tiemstring;

 }

 setInterval(updateclock,1000)