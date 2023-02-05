function calc() {

    let firstNumberElement = document.getElementById('num1');
    let secondNumberElement = document.getElementById('num2');
    let resultElement = document.getElementById('sum');
    resultElement.value = Number(firstNumberElement.value) + Number(secondNumberElement.value);

}

// Write a JS function that reads two numbers from input fields in a web page and 
// puts their sum in another field when the user clicks on a button.
// There will be no input/output, your program should instead modify the DOM of the given HTML document.