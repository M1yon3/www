const questions = [
 {
   question: "ハチワレの特徴として正しいものは？",
   choices: ["無口", "前向き", "冷静", "無関心"],
   answer: 1
 },
 {
   question: "ハチワレがよくする行動は？",
   choices: ["歌う", "寝る", "逃げる", "怒る"],
   answer: 0
 },
 {
   question: "ハチワレが大切にしているのは？",
   choices: ["お金", "名誉", "仲間", "力"],
   answer: 2
 },
 {
   question: "ハチワレの性格に近いものは？",
   choices: ["冷酷", "自己中心的", "思いやりがある", "無表情"],
   answer: 2
 },
 {
   question: "ハチワレが視聴者に与える印象は？",
   choices: ["不安", "安心感", "恐怖", "緊張"],
   answer: 1
 }
];
let current = 0;
let score = 0;
const q = document.querySelector("#question");
const choicesDiv = document.querySelector("#choices");
const result = document.querySelector("#result");
function showQuestion() {
 q.textContent = questions[current].question;
 choicesDiv.innerHTML = "";
 questions[current].choices.forEach((choice, index) => {
   const btn = document.createElement("button");
   btn.textContent = choice;
   btn.addEventListener("click", () => checkAnswer(index));
   choicesDiv.appendChild(btn);
 });
}
function checkAnswer(index) {
 if (index === questions[current].answer) {
   result.textContent = "正解！";
   score++;
 } else {
   result.textContent = "不正解";
 }
}
document.querySelector("#next").addEventListener("click", () => {
 current++;
 result.textContent = "";
 if (current < questions.length) {
   showQuestion();
 } else {
   q.textContent = `終了！正解数は ${score} 問です。`;
   if (score >= 4) {
     result.textContent = "あなたはすでにハチワレマスター！";
   } else {
     result.textContent = "もう少し復習してみよう。";
   }
 }
});
document.querySelector("#retry").addEventListener("click", () => {
 current = 0;
 score = 0;
 result.textContent = "";
 showQuestion();
});
showQuestion();