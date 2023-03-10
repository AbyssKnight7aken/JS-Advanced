function validate() {

    const emailElement = document.getElementById('email');
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/gm;

    emailElement.addEventListener('change', checkValid);

    function checkValid(event) {
        if (pattern.test(event.target.value)) {
            event.target.classList.remove('error');
        } else {
            event.target.classList.add('error');
        }
    }

}

// Write a JS function that dynamically validates an email input field when it is changed.
// If the input is invalid, apply to it the class "error". Do not validate on every keystroke,
// as it is annoying for the user, consider only change events.
// A valid email will be in format: <name>@<domain>.<extension>
// Only lowercase Latin characters are allowed for any of the parts of the email.
// If the input is valid, clear the style.
