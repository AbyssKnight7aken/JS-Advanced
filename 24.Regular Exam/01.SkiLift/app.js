window.addEventListener('load', solve);

function solve() {

    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const peopleNumberElement = document.getElementById('people-count');
    const dateElement = document.getElementById('from-date');
    const daysElement = document.getElementById('days-count');

    const nextStepButton = document.getElementById('next-btn');
    const ticketsInfoElement = document.querySelector('.ticket-info-list');
    const confirmTicket = document.querySelector('.confirm-ticket');

    nextStepButton.addEventListener('click', nextStep);

    function nextStep(e) {

        e.preventDefault();

        const inputs = {
            firstName: firstNameElement.value,
            lastName: lastNameElement.value,
            people: peopleNumberElement.value,
            date: dateElement.value,
            days: daysElement.value
        }

        console.log(inputs);

        if (firstNameElement.value === ''
            || lastNameElement.value === ''
            || peopleNumberElement.value === ''
            || dateElement.value === ''
            || daysElement.value === '') {
            return;
        }

        const liElement = document.createElement('li');
        liElement.classList.add('ticket');
        const articleElement = document.createElement('article');
        const h3NameElement = document.createElement('h3');
        h3NameElement.innerText = `Name: ${inputs.firstName} ${inputs.lastName}`;
        const pDateElement = document.createElement('p');
        pDateElement.innerText = `From date: ${inputs.date}`;
        const pDaysElement = document.createElement('p');
        pDaysElement.innerText = `For ${inputs.days} days`;
        let pPeopleElement = document.createElement('p');
        pPeopleElement.innerText = `For ${inputs.people} people`;

        //append elements...
        articleElement.appendChild(h3NameElement);
        articleElement.appendChild(pDateElement);
        articleElement.appendChild(pDaysElement);
        articleElement.appendChild(pPeopleElement);

        liElement.appendChild(articleElement);

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.innerText = 'Edit';

        const continueButton = document.createElement('button');
        continueButton.classList.add('continue-btn');
        continueButton.innerText = 'Continue';

        liElement.appendChild(editButton);
        liElement.appendChild(continueButton);

        ticketsInfoElement.appendChild(liElement);

        firstNameElement.value = '';
        lastNameElement.value = '';
        peopleNumberElement.value = '';
        dateElement.value = '';
        daysElement.value = '';

        nextStepButton.disabled = true;

        editButton.addEventListener('click', edit)

        function edit() {
            liElement.remove();

            firstNameElement.value = inputs.firstName;
            lastNameElement.value = inputs.lastName;
            peopleNumberElement.value = inputs.people;
            dateElement.value = inputs.date;
            daysElement.value = inputs.days;

            nextStepButton.disabled = false;
        }

        continueButton.addEventListener('click', onContinue)

        function onContinue() {

            liElement.remove();

            const list = document.createElement('li');
            list.classList.add('ticket-content');

            list.appendChild(articleElement);
            confirmTicket.appendChild(list);

            const confirmButton = document.createElement('button');
            confirmButton.classList.add('confirm-btn');
            confirmButton.innerText = 'Confirm';

            const cancelButton = document.createElement('button');
            cancelButton.classList.add('cancel-btn');
            cancelButton.innerText = 'Cancel';

            list.appendChild(confirmButton);
            list.appendChild(cancelButton);

            cancelButton.addEventListener('click', () => {
                list.remove();
                nextStepButton.disabled = false;
            })

            confirmButton.addEventListener('click', onConfirm)

            function onConfirm() {
                const mainDivElement = document.querySelector('#main');
                mainDivElement.remove();

                let bodyElement = document.querySelector('#body');

                let h1Element = document.createElement('h1');
                h1Element.setAttribute('id','thank-you');
                h1Element.innerText = 'Thank you, have a nice day!'

                const backButton = document.createElement('button');
                backButton.setAttribute('id','back-btn');
                backButton.innerText = 'Back';

                bodyElement.appendChild(h1Element);
                bodyElement.appendChild(backButton);

                backButton.addEventListener('click', () => {
                    location.reload();
                })
            }
        }
    }
}