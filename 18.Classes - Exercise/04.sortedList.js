class List {
    constructor() {
        this.listArr = [];
        this.size = this.listArr.length;
    }

    add(element) {
        this.listArr.push(element);
        this.listArr.sort((a, b) => a - b);
        this.size = this.listArr.length;
    }

    remove(index) {
        if (this.listArr[index] === undefined) {
            throw new Error('Invalid index!');
        }
        this.listArr.splice(index, 1);
        this.size = this.listArr.length;
    }

    get(index) {
        if (this.listArr[index] === undefined) {
            throw new Error('Invalid index!');
        }
        return this.listArr[index];
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));