function validate() {
    
    let patternUsername = new RegExp(/^[A-Za-z0-9]{3,20}$/, 'g');
    let patternPassword = new RegExp(/^\w{5,15}$/, 'g');
    let patternEmail = new RegExp(/^[^@.]+@[^@]*\.[^@]*$/, 'g');
 
    let hiddenDiv = document.getElementById('valid');
 
    let companyInfoFieldSet = document.getElementById('companyInfo');
    let companyNumber = document.getElementById('companyNumber');
 
    let validators = [patternUsername, patternEmail, patternPassword, patternPassword];
 
    let inputs = Array.from(document.querySelectorAll('form fieldset:nth-child(1) div input'));
    let checkBox = inputs.pop();
    let password = inputs[2];
    let confirmPassword = inputs[3];
 
    let buttonSubmit = document.getElementById('submit');
 
    checkBox.addEventListener('change', (event) => {
        if(event.target.checked) {
            companyInfoFieldSet.style.display = 'block';
        }else {
            companyInfoFieldSet.style.display = 'none';
        }
    })

 
    buttonSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        let valid = true;
        for(let i = 0; i < validators.length; i++) {
            let input = inputs[i];
            let validator = validators[i];
 
            if((input.value).match(validator) === null) {
                valid = false;
                input.style.cssText = 'border-color: red;';
            }else {
                input.style.cssText = 'border: none;';
            }
        }
 
        let result = confirmPasswordCheck(password, confirmPassword);
        if(!result) {
            valid = false;
        }
 
 
        if(checkBox.checked) {
            if(companyNumber.value >= 1000 && companyNumber.value <= 9999) {
                companyNumber.style.cssText = 'border: none;';
            }else {
                valid = false
                companyNumber.style.cssText = 'border-color: red;';
            }
        }
 
        if(valid) {
            hiddenDiv.style.display = 'block';
        }else {
            hiddenDiv.style.display = 'none';
        }
    })
    function confirmPasswordCheck(pass, confirmPass) {
        if(pass.value === confirmPass.value) {
            return true
        }else {
            pass.style.cssText = 'border-color: red;';
            confirmPass.style.cssText = 'border-color: red;';
            return false;
        }
    }
}

// You are given the task to write validation for the fields of a simple form.
// You are provided a skeleton containing the necessary files for your program.
// The validations should be as follows:
// •	The username needs to be between 3 and 20 symbols inclusively and only letters and numbers are allowed.
// •	The password and confirm-password must be between 5 and 15 inclusively symbols and only word characters
// are allowed (letters, numbers, and _).
// •	The inputs of the password and confirm-password field must match.
// •	The email field must contain the “@” symbol and at least one "."(dot) after it.
// If the "Is company?" checkbox is checked, the CompanyInfo fieldset should become visible and the
// Company Number field must also be validated, if it isn’t checked the Company fieldset should have
// the style "display: none;" and the value of the Company Number field shouldn’t matter. 
// •	The Company Number field must be a number between 1000 and 9999.
// •	Use addEventListener() function to attach an event listener for the "change" event to the checkbox.
// Every field with an incorrect value when the [Submit] button is pressed should have the following style
// applied border-color: red;, alternatively, if it’s correct it should have style border: none;.
// If there are required fields with an incorrect value when the [Submit] button is pressed,
// the div with id="valid" should become hidden ("display: none;"), alternatively if all fields are correct
// the div should become visible.
