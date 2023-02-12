function addItem() {
    
    let listElements = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let newLiEmelent = document.createElement('li');
    newLiEmelent.textContent = inputElement.value;
    inputElement.value = '';

    let deleteElement = document.createElement('a');
    deleteElement.href  = '#';
    deleteElement.textContent = '[Delete]';
    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    })

    newLiEmelent.appendChild(deleteElement);
    listElements.appendChild(newLiEmelent);
}

// Extend the previous problem to display a [Delete] link after each list item.
// Clicking it should delete the item with no confirmation. You have to add href="#" to the link element.