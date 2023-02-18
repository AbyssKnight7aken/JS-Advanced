function encodeAndDecodeMessages() {

    let textarea = document.getElementsByTagName('textarea');
    [...document.getElementsByTagName('button')].forEach(button => button.addEventListener('click', message));
 
    function message(event) {
        if (event.target.textContent.includes('Encode')) {
            let encoded = [...textarea[0].value].map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
            textarea[1].value = encoded;
            textarea[0].value = '';
        } else if (event.target.textContent.includes('Decode')) {
            let decoded = [...textarea[1].value].map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
            textarea[1].value = decoded;
        }
    }
}