function generateReport() {

    let output = document.querySelector('#output')
    let select = Array.from(document.querySelectorAll('thead tr th input'));
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    const result = [];

    rows.forEach( row => {
        const curtObj = {};
        Array.from(row.querySelectorAll('td')).forEach((x, i) => {
            if (select[i].checked) {
                curtObj[select[i].name] = x.textContent;
            }
        });
        result.push(curtObj);
    });

    output.value = JSON.stringify(result);

}

// You will be given a web page, containing a table and output area. 
// When the "Generate Report" button is pressed:
// •	You must generate a JSON report from the data inside the table, by only taking the columns,
// which are selected.
// Each table header has a checkbox. If the checkbox is checked, then the data from this column
// must be included in the report. Unchecked columns must be omitted. 
// For every row (excluding the header):
// •	Create an object with properties for each of its columns.
// •	The name of each property is the name attribute of the column’s header, and the value is the
// text content of the cell.
// •	Store the result in an array and output it as a JSON string display it inside the
// <textarea> with id "output". 
// Input/Output
// There will be input, your program must execute based on the page content.
// The output must be a JSON string, displayed in the <textarea> with id "output".
