function search() {

   let townsElements = document.querySelectorAll('#towns li');
   let inputElement = document.getElementById('searchText').value;
   let resultElement = document.getElementById('result');
   const towns = Array.from(townsElements);
   let matches = 0;
   console.log(inputElement);

   for (const town of towns) {

      if (town.textContent.includes(inputElement)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      }
   }

   return resultElement.textContent = `${matches} matches found`;

}

// An HTML page holds a list of towns, a search box, and a [Search] button.
// Implement the search function to bold and underline the items from the list
// which include the text from the search box. Also, print the number of items
// the current search matches in the format `${matches} matches found`.
// Note: It is necessary to clear the results of the previous search.

