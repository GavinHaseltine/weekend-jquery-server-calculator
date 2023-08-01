const { response } = require("express");

$(document).ready(handleReady);

//Global Vars
// let symbolType;
// let outcome;
let symbol;

function handleReady() {
  console.log("jquery is loaded!")

  getCalcHistory();
//    $('#equalsButton').on('click',handleEquals);
//    $('#clearButton').on('click',handleClear);
//    $('#plusButton').on('click', makePlus);
//    $('#subButton').on('click', makeMinus);
//    $('#multiplyButton').on('click', makeMultiply);
//    $('#divideButton').on('click', makeDivide);
}


function getCalcHistory(){

    $.ajax({
        method: 'GET',
        url: '/calc'
    }).then((response) => {
        console.log('In GET', response);
        render(response);

        let currentResult = response[response.length - 1]?.result

        if (currentResult == undefined) {
            currentResult = ''
        }

        renderCurrentResult(currentResult)
    }).catch((error) => {
        alert("Error with GET /calc");
    })
}

function renderCurrentResult(currentResult) {
    $('#historyArea').empty()
    $('#historyArea').append(`${currentResult}`)
}




function render(bigMath){
    console.log('in render')

}

// function handleEquals(){

//     $('#outputArea').text(" ");

//     let firstNumber = Number($('#inputOne').val());
    
//     let secondNumber = Number($('#inputTwo').val());
    
//     if(symbolType == "plus"){
//     outcome = firstNumber + secondNumber;
//     //console.log(outcome);
//     $('#outputArea').append(outcome);
//     $('#historyArea').append(`<ul>${firstNumber} + ${secondNumber} = ${outcome}</ul>`);
//     } else if(symbolType == "minus"){
//         outcome = firstNumber - secondNumber;
//     //console.log(outcome);
//     $('#outputArea').append(outcome);
//     $('#historyArea').append(`<ul>${firstNumber} - ${secondNumber} = ${outcome}</ul>`);
//     } else if(symbolType == "multiply"){
//         outcome = firstNumber * secondNumber;
//         //console.log(outcome);
//         $('#outputArea').append(outcome);
//         $('#historyArea').append(`<ul>${firstNumber} * ${secondNumber} = ${outcome}</ul>`);
//     } else if(symbolType == "divide"){
//         outcome = firstNumber / secondNumber;
//         //console.log(outcome);
//         $('#outputArea').append(outcome);
//         $('#historyArea').append(`<ul>${firstNumber} / ${secondNumber} = ${outcome}</ul>`);
//     }


// }

// function handleClear(){
//     $('#inputOne').val('')
//     $('#inputTwo').val('')
//     $('#outputArea').text('')
// console.log('In handleClear');
// }

// function makePlus(){
// symbolType = "plus";
// }

// function makeMinus(){
//     symbolType = "minus";
// }

// function makeMultiply(){
//     symbolType = "multiply";
// }

// function makeDivide(){
//     symbolType = "divide";
// }