let count = 0;
document.getElementById("btn").addEventListener("click", function () {
 count++;
 document.getElementById("count").textContent = count;
 let result = "";
 if (count === 1) {
   for (let i = 0; i < 1; i++) {
     result += "★";
   }
 } else if (count === 2) {
   for (let i = 0; i < 5; i++) {
     result += "★";
   }
 } else if (count === 3) {
   for (let i = 1; i <= 5; i++) {
     result += i + " ";
   }
 } else if (count === 4) {
   for (let i = 2; i <= 10; i += 2) {
     result += i + " ";
   }
 } else if (count === 5) {
   let sum = 0;
   for (let i = 1; i <= count; i++) {
     sum += i;
   }
   result = "合計値: " + sum;
 } else if (count >= 6) {
   result = "クリアしました。カウントを0に戻します。";
   count = 0;
   document.getElementById("count").textContent = count;
 }
 document.getElementById("result").textContent = result;
});