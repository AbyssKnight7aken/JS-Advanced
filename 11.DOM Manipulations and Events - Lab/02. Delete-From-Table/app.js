function deleteByEmail() {

    let eMailRowsElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let emailInputElement = document.getElementsByName('email')[0];
    let resultElement = document.getElementById('result');

    for (const row of eMailRowsElements) {
        if (row.textContent === emailInputElement.value) {
            row.parentElement.remove();
            resultElement.textContent = 'Deleted.';
        } else {
            resultElement.textContent = 'Not found.';
        }
    }

    // let emailElements = Array.from(eMailRowsElements);
    // let targetElement = emailElements.find(x => x.textContent == emailInputElement.value)

    // if (targetElement) {
    //     targetElement.parentElement.remove();

    //     resultElement.textContent = 'Deleted.';
    // } else {
    //     resultElement.textContent = 'Not found.';
    // }
}

// Write a program that takes an email from an input field and deletes the matching row from a table. 
// •	If entry is found, the textContent in the element with id="result" must be set to "Deleted."
// •	Otherwise, an error should be displayed in a <div> with id="result". The error should be "Not found." 


