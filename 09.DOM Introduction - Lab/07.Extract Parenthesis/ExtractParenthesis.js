function extract(content) {

    let contentElement = document.getElementById('content');
    let pattern = /\(([^(]+)\)/g;
    const result = [];

    let match = pattern.exec(contentElement.textContent);

    while (match) {
        result.push(match[1]);
        match = pattern.exec(contentElement.textContent);
    }

    console.log(result.join('; '));
    return result.join('; ');

}

// Write a JS function that when executed, extracts all parenthesized text from a target paragraph
// by given element ID. The result is a string, joined by "; " (semicolon, space).
// Input
// Your function will receive a string parameter, representing the target element ID,
// from which text must be extracted. The text should be extracted from the DOM.
// Output
// Return a string with all matched text, separated by "; " (semicolon, space).
