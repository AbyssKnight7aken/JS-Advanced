function extractText() {

    let ulElement = document.getElementById('items');
    let resultElemnt = document.getElementById('result');
    resultElemnt.textContent = ulElement.textContent;

}

// Write a JS function that scans a given HTML list and appends all collected list items’ text
//  to a textarea on the same page when the user clicks on a button.
// There will be no input/output, your program should instead modify the DOM of the given HTML document.