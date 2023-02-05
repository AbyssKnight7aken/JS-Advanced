function editElement(element, string, replacer) {
    let regex = new RegExp(string, 'g');
    element.textContent = element.textContent.replace(regex, replacer);
}

// Create function edit() that takes three parameters.
// The first parameter is a reference to an HTML element, the other two parameters are string–match and replacer.
// You have to replace all occurrences of the match inside the text content of the given element with a replacer.