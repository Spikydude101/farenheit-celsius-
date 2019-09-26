'use strict';
document.getElementById("convert").addEventListener("click" , convert);


function convert() {
    let fnum = document.getElementById('temp').value;
    let Num2 = document.getElementById('c-value').value;
    let vari1 = 32;
    let answer1 = fnum - vari1;
    let answer2 = answer1 * ( 5 / 9);
    document.getElementById('c-value').innerHTML = (answer2) + "°";
}