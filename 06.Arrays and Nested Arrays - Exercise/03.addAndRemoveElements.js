function addAndRemoveElements(commands) {

    const array = [];

    for (let i = 0; i < commands.length; i++) {
        let command = commands[i];
        if (command === 'add') {
            array.push(i + 1);
        } else if (command === 'remove') {
            array.pop();
        }
    }

    if (array.length < 1) {
        array.push('Empty');
    }

    console.log(array.join('\n'));

}

addAndRemoveElements([
    'add',
    'add',
    'add',
    'add'])

addAndRemoveElements([
    'add',
    'add',
    'remove',
    'add',
    'add'])

addAndRemoveElements([
    'remove',
    'remove',
    'remove'])