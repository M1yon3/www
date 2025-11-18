let count = 0;
document.getElementById("btn").addEventListener("click", function () {
 count++;
 document.getElementById("count").textContent = count;
 let result = "";
 switch (count) {
   case 1:
     for (let i = 0; i < 1; i++) {
       result += "★";
     }
     break;
   case 2:
     for (let i = 0; i < 5; i++) {
       result += "★";
     }
     break;
   case 3:
     for (let i = 1; i <= 5; i++) {
       result += i + " ";
     }
     break;
   case 4:
     for (let i = 2; i <= 10; i += 2) {
       result += i + " ";
     }
     break;
   case 5:
     let sum = 0;
     for (let i = 1; i <= count; i++) {
       sum += i;
     }
     result = "合計値: " + sum;
     break;
   default:
     result = "クリアしました。カウントを0に戻します。";
     count = 0;
     document.getElementById("count").textContent = count;
     break;
 }
 document.getElementById("result").textContent = result;
});