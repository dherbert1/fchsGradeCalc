const calculateBtn = document.getElementById("calculate");
const Q1 = document.getElementById("Q1Grade");
const Q2 = document.getElementById("Q2Grade");
const E = document.getElementById("examGrade");
const S = document.getElementById("semesterGrade");

calculate.addEventListener("click", calculate);

function calculate() {
    const result = (Q1.value * 0.45) + (Q2.value * 0.45) + (E.value * 0.1);
    S.innerText = result;
}