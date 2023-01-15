function wordsUpperCase(words) {

    console.log(words.match(/[A-z0-9]+/g).join(', ').toUpperCase());

}

wordsUpperCase('Hi, how are you?')
wordsUpperCase('hello')