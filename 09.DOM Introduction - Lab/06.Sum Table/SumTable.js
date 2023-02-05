function sumTable() {

    let costElements = document.querySelectorAll('tr td:nth-of-type(2)');

    let sumElements = Array.from(costElements);
    let result = sumElements.pop();
    result = sumElements.reduce((a, x) => {
        let currentValue = Number(x.textContent);
        return a + currentValue;
    }, 0);

    let sumElement = document.getElementById('sum');
    sumElement.textContent = result;

}

// Write a JS function that finds the first table in a document and sums the values in the last column.
// The result is then displayed in an element with ID "sum".
// There will be no input/output, your program should instead modify the DOM of the given HTML document.