function pascalOrCamelCase() {

  let inputTextElement = document.getElementById('text');
  let namingConvention = document.getElementById('naming-convention');
  let resultElement = document.getElementById('result');
  const result = [];

  if (namingConvention.value !== 'Camel Case' && namingConvention.value !== 'Pascal Case') {
    result.push('Error!');
  } else {
    const words = inputTextElement.value.split(' ');
    let firstWord = words.shift().toLowerCase();
    if (namingConvention.value === 'Pascal Case') {
      firstWord = firstWord[0].toUpperCase() + firstWord.slice(1).toLowerCase();
    }
    result.push(firstWord);
    words.forEach(word => {
      word = word[0].toUpperCase() + word.slice(1).toLowerCase();
      result.push(word);
    });
  }

  resultElement.textContent = result.join('');

}

// An HTML file is given and your task is to write a function that takes two string parameters
// as an input and transforms the first parameter to the type required by the second parameter.
// •	The first parameter will be the text that you need to modify depending on the second parameter.
// The words in it will always be separated by space.
// •	The second parameter will be either "Camel Case" or "Pascal Case". In case of different input,
// your output should be "Error!"
// When the button is clicked the function should convert the first string to either of the cases.
// The output should consist of only one word - the string you have modified.
// Once your output is done, you should set it as HTML to the <span> element.
