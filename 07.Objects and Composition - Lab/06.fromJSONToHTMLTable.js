function fromJSONToHTMLTable(inputJson) {

    const result = [];
    result.push('<table>');
    const data = JSON.parse(inputJson);
    // collect property names (keys)
    const props = Object.keys(data[0]);
    // create table headers form names
    result.push(`  <tr>${props.map(p => `<th>${escapeHTML(p)}</th>`).join('')}</tr>`);
    // create rows for entry in collection
    for (const entry of data) {
        result.push(`  <tr>${props.map(p => `<td>${escapeHTML(entry[p])}</td>`).join('')}</tr>`);
    }

    // output table
    result.push('</table>');

    function escapeHTML(value) {
        return value
          .toString()
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      }

    return result.join('\n');

}

console.log(fromJSONToHTMLTable(
`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`)); 

console.log(fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
)); 