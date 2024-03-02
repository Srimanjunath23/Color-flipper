const color=[ "aqua"," black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow","red","blue"];

const btn=document.getElementById("btn");
const txt=document.getElementById("Content")
btn.addEventListener("click" ,function(){
   // const randomnuber=Math.floor(Math.random()*color.length);
   const r=Math.floor(Math.random()*color.length);
   document.body.style.backgroundColor=color[r];
   txt.textContent=color[r];
   

});

