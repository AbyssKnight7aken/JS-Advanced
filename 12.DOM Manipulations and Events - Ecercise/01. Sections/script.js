function create(words) {

   const containerElement = document.getElementById('content');

   words.forEach(word => {
      let newDivElement = document.createElement('div');
      let paragraphElement = document.createElement('p');
      paragraphElement.textContent = word;
      paragraphElement.style.display = 'none';
      newDivElement.appendChild(paragraphElement);
      containerElement.appendChild(newDivElement);
      newDivElement.addEventListener('click', (event) => {
         event.target.children[0].style.display = 'block';
      })
   });

}

// You will receive an array of strings. For each string, create a div with a paragraph
// with the string in it. Each paragraph is initially hidden (display:none).
// Add a click event listener to each div that displays the hidden paragraph.
// Finally, you should append all divs to the element with an id "content".