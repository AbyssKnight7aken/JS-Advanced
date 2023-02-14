function validate() {


    let inputElement = document.getElementById('email');
    let regex = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
    let value = inputElement.value;

    inputElement.addEventListener('change',checkEmail);

    function checkEmail(event) {
        if(regex.test(event.target.value)){
            event.target.removeAttribute('class');
            return;
        }
        event.target.className = 'error';
    }
 }

// Write a function that dynamically validates an email input field when it is changed.
// If the input is invalid, apply the class "error". Do not validate on every keystroke,
// as it is annoying for the user, consider only change events.
// A valid email is considered to be in the format: <name>@<domain>.<extension>
// Only lowercase Latin characters are allowed for any of the parts of the email.
// If the input is valid, clear the style. 