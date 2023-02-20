function listProcessor(input) {

    let result = [];

    const obj = {
        add,
        remove,
        print
    }

    input.forEach(element => {
        let [command, str] = element.split(' ');
        return obj[command](str);
    });

    function add(str) {
        result.push(str)
    }

    function remove(str) {
        result = result.filter(x => (x !== str))
    }

    function print() {
        console.log(result.join(','));
    }

}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])