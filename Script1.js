
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let randomNumberValue;
const btn=document.getElementById("btt");
const txt=document.getElementById("Cont");


btn.addEventListener("click", function () {
  let hexColorValue = "#";
 
  for (let i = 0; i < 6; i++) {
    randomNumberValue = Math.floor(Math.random() * hex.length);
    hexColorValue += hex[randomNumberValue];
  }
 
  txt.textContent = hexColorValue;
  document.body.style.backgroundColor = hexColorValue;
});