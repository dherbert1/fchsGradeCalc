const calculateBtn = document.getElementById("calculate");
const Q1 = document.getElementById("Q1Grade");
const Q2 = document.getElementById("Q2Grade");
const E = document.getElementById("examGrade");
const S = document.getElementById("semesterGrade");
const warning = document.getElementById("warning");

calculateBtn.addEventListener("click", calculate);

function calculate() {
    if(Q1.value > 100 || Q2.value > 100 || E.value > 100){
        warning.setAttribute('display', 'block');
    }
    else{
        warning.setAttribute('display', 'none');
        const result = Math.round((Q1.value * 0.45) + (Q2.value * 0.45) + (E.value * 0.1));
        S.textContent = `${result}`;
    }
    
}