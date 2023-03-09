window.addEventListener('load', solve);

function solve() {

    const product = document.getElementById('type-product');
    const description = document.getElementById('description');
    const name = document.getElementById('client-name');
    const phone = document.getElementById('client-phone');

    const submitButton = document.getElementsByTagName('button')[0];

    const recievedOrdersSection = document.getElementById('received-orders');
    const completedOrdersSection = document.getElementById('completed-orders');
    const clearButton = document.querySelector('.clear-btn');

    submitButton.addEventListener('click', onSubmit);

    function onSubmit(event) {
        event.preventDefault();
        const inputs = {
            product: product.value,
            description: description.value,
            name: name.value,
            phone: phone.value
        }

        if (description.value == '' || name.value == '' || phone.value == '') {
            return;
        }

        //create elements...
        const divEelement = document.createElement('div');
        divEelement.classList.add('container');

        const h2TypeEelement = document.createElement('h2');
        h2TypeEelement.innerText = `Product type for repair: ${inputs.product}`;
        const h3ClientInfoEelement = document.createElement('h3');
        h3ClientInfoEelement.innerText = `Client information: ${inputs.name}, ${inputs.phone}`;
        const h4DescriptionEelement = document.createElement('h4');
        h4DescriptionEelement.innerText = `Description of the problem: ${inputs.description}`;

        const startButton = document.createElement('button');
        startButton.classList.add('start-btn');
        startButton.innerText = 'Start repair';

        const finishButton = document.createElement('button');
        finishButton.classList.add('finish-btn');
        finishButton.innerText = 'Finish repair';
        finishButton.disabled = true;

        //append elements...
        divEelement.appendChild(h2TypeEelement);
        divEelement.appendChild(h3ClientInfoEelement);
        divEelement.appendChild(h4DescriptionEelement);
        divEelement.appendChild(startButton);
        divEelement.appendChild(finishButton);

        recievedOrdersSection.appendChild(divEelement);

        description.value = '';
        name.value = '';
        phone.value = '';

        //start repair functionality...
        startButton.addEventListener('click', onStart);
        function onStart() {
            startButton.disabled = true;
            finishButton.disabled = false;
        }
        //finish repair functionality...
        finishButton.addEventListener('click', onfinish);
        function onfinish() {
            startButton.remove();
            finishButton.remove();
            completedOrdersSection.appendChild(divEelement);

            //clear functionality...
            clearButton.addEventListener('click', onClear);

            function onClear() {
                divEelement.remove();
            }
        }
    }
}