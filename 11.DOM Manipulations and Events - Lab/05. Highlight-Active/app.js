function focused() {
    
    const inputElements = document.querySelectorAll('input');

    for (const input of inputElements) {
        input.addEventListener('focus', (event) => {
            event.target.parentElement.className = 'focused';
        });
        input.addEventListener('blur', (event) => {
            event.target.parentElement.className = '';
        });
    }
}

// Write a function that highlights the currently active section of a document.
// There will be multiple divs with input fields inside them. Set the class of the div
// that contains the currently focused input field to "focused". When the focus is lost (blurred),
// remove the class from the element.
