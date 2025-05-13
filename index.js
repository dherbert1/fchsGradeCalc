const calculateBtn = document.getElementById("calculate");
const Q1 = document.getElementById("Q1Grade");
const Q2 = document.getElementById("Q2Grade");
const E = document.getElementById("examGrade");
const S = document.getElementById("semesterGrade");
const warning = document.getElementById("warning");
const dZ = document.getElementById("dangerZone");
const sAL = document.getElementById("scoreAtLeast");
const danger = document.getElementById("danger");

calculateBtn.addEventListener("click", calculate);

function calculate() {
    if(Q1.value > 110 || Q2.value > 110 || E.value > 110){
        warning.style.display = 'block';
        warning.style.height = 'auto';
    }
    else{
        warning.style.display = 'none';
        warning.style.height = '0';
        const result = Math.floor((Q1.value * 0.45) + (Q2.value * 0.45) + (E.value * 0.1));
        S.textContent = `${result}`;
    }

    if((Q1.value * 0.45) + (Q2.value * 0.45) <= 60){
        let scoreAtLeast = Math.floor((60-(Q1.value * 0.45) - (Q2.value * 0.45))/.10);
        danger.style.display = 'block';
        danger.style.height = 'auto';
        console.log(scoreAtLeast);
        if((Q1.value * 0.45) + (Q2.value * 0.45) + (scoreAtLeast * 0.1) < 60){
            scoreAtLeast++;
            console.log(scoreAtLeast);
        }
        console.log(scoreAtLeast);
        sAL.textContent = `${scoreAtLeast}`;
    }
    else{
        danger.style.display = 'none';
        danger.style.height = '0';
    }
    
}