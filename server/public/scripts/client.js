$(document).ready(handleReady);

//Global Vars
let symbolType;
let outcome;

function handleReady() {
  console.log("jquery is loaded!")
   $('#equalsButton').on('click',handleEquals);
   $('#clearButton').on('click',handleClear);
   $('#plusButton').on('click', makePlus);
   $('#subButton').on('click', makeMinus);
   $('#multiplyButton').on('click', makeMultiply);
   $('#divideButton').on('click', makeDivide);
}




function handleEquals(){

    $('#outputArea').text(" ");

    let firstNumber = Number($('#inputOne').val());
    
    let secondNumber = Number($('#inputTwo').val());
    
    if(symbolType == "plus"){
    outcome = firstNumber + secondNumber;
    //console.log(outcome);
    $('#outputArea').append(outcome);
    $('#historyArea').append(`<ul>${firstNumber} + ${secondNumber} = ${outcome}</ul>`);
    } else if(symbolType == "minus"){
        outcome = firstNumber - secondNumber;
    //console.log(outcome);
    $('#outputArea').append(outcome);
    $('#historyArea').append(`<ul>${firstNumber} - ${secondNumber} = ${outcome}</ul>`);
    } else if(symbolType == "multiply"){
        outcome = firstNumber * secondNumber;
        //console.log(outcome);
        $('#outputArea').append(outcome);
        $('#historyArea').append(`<ul>${firstNumber} * ${secondNumber} = ${outcome}</ul>`);
    } else if(symbolType == "divide"){
        outcome = firstNumber / secondNumber;
        //console.log(outcome);
        $('#outputArea').append(outcome);
        $('#historyArea').append(`<ul>${firstNumber} / ${secondNumber} = ${outcome}</ul>`);
    }


}

function handleClear(){
    $('#inputOne').val('')
    $('#inputTwo').val('')
    $('#outputArea').text('')
console.log('In handleClear');
}

function makePlus(){
symbolType = "plus";
}

function makeMinus(){
    symbolType = "minus";
}

function makeMultiply(){
    symbolType = "multiply";
}

function makeDivide(){
    symbolType = "divide";
}