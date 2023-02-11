function solve() {

    const firstOptElement = document.createElement('option');
    const secondOptElement = document.createElement('option');
    firstOptElement.value = 'binary';
    secondOptElement.value = 'hexadecimal';
    firstOptElement.innerHTML = 'Binary';
    secondOptElement.innerHTML = 'Hexadecimal';

    const menuElement = document.getElementById('selectMenuTo');
    menuElement.appendChild(firstOptElement);
    menuElement.appendChild(secondOptElement);

    const button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', function () {
        const numberInput = document.getElementById('input');
        const result = document.getElementById('result');
        if (menuElement.value === 'binary') {
            result.value = Number(numberInput.value).toString(2);
        } else if (menuElement.value === 'hexadecimal') {
            result.value = Number(numberInput.value).toString(16).toLocaleUpperCase();
        }
    });
}

