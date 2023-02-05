function colorize() {

    // let rowElements = document.querySelectorAll('tr:nth-of-type(2n) td');

    // rowElements.forEach(x => {
    //     x.style.backgroundColor = 'teal';
    // });

    let rowElements = document.getElementsByTagName('tr');

    const rows = Array.from(rowElements);
    rows.forEach((x, i) => {
        if (i % 2 !== 0) {
            x.style.backgroundColor = 'teal';
        }
    });
}

// Write a JS function that changes the color of all even rows when the user clicks a button.
// Apply the color "Teal" to the target rows.
// There will be no input/output, your program should instead modify the DOM of the given HTML document.