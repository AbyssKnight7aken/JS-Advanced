function lockedProfile() {
    
    Array.from(document.querySelectorAll('.profile button'))
    .forEach(button => button.addEventListener('click', onClick));

    function onClick(event) {
        let profile = event.target.parentElement;
        let isActive = profile.querySelector('input[value="unlock"]').checked;
        if (isActive) {
            let info = Array.from(profile.querySelectorAll('div'))
            .find(p => p.id.includes('HiddenFields'));
            if (event.target.textContent === 'Show more') {
                event.target.textContent = 'Hide it';
                info.style.display = 'block';
            } else {
                event.target.textContent = 'Show more';
                info.style.display = 'none';
            }
        }
    }

}

// In this problem, you should create a JS functionality that shows and hides the additional information about users.
// When one of the [Show more] buttons is clicked, the hidden information inside the div should
// be shown, only if the profile is not locked! If the current profile is locked, nothing should happen.
// If the hidden information is displayed and we lock the profile again, the [Hide it] button should not be working! 
// Otherwise, when the profile is unlocked and we click on the [Hide it] button, the new fields must hide again.

