function addItem() {

    let listElements = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let newLiEmelent = document.createElement('li');
    newLiEmelent.textContent = inputElement.value;
    listElements.appendChild(newLiEmelent);
}

// Write a function that reads the text inside an input field
// and appends the specified text to a list inside an HTML page.