function sortArrayBy2Criteria(array) {

    const result = array.sort((a, b) => a.length - b.length || a.localeCompare(b))
        .forEach((element) => console.log(element));

}

sortArrayBy2Criteria([
    'alpha',
    'beta',
    'gamma'])

sortArrayBy2Criteria([
    'Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'])

sortArrayBy2Criteria([
    'test',
    'Deny',
    'omen',
    'Default'])