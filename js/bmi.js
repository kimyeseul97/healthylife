function buttonClick(){
    bmiValue = weight.value / ((height.value/100) * (height.value/100));
    bmi.innerHTML = `당신의 bmi는 ${bmiValue.toFixed(1)} 입니다.`; 
} // bmi == 몸무게 / 키^2

let height = document.getElementById("height");
let weight = document.getElementById("weight");
let bmi = document.getElementById("bmi");
let button = document.getElementById("button");
let bmiValue;

button.onclick = buttonClick;