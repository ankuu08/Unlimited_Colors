let button1=document.querySelector(".btn1");
let button2=document.querySelector(".btn2");
let container=document.querySelector(".div2");
const colorform=function(){
  let hex="0123456789ABCDEF"
  let color="#";
  for(let i=0;i<6;i++){
    let idx=Math.floor(Math.random()*15);
    color=color+hex[idx];
  }
  return color;
}
let colorfill=function(){
  let color1=colorform();
  container.style.backgroundColor=color1;
}
let start;
button1.addEventListener('click',()=>{
  start=setInterval(colorfill,1400);
})
button2.addEventListener('click',()=>{
  clearInterval(start);
})
