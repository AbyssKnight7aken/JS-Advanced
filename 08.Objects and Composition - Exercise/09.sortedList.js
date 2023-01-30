function createSortedList() {

    const obj = {
        arr: [],
        size: 0,
        add(num) {
            if (typeof num === 'number') {
                this.arr.push(num);
                this.size++;
                this.arr.sort((a, b) => a - b);
            } else {
                throw 'The input is not a number!';
            }

        },
        remove(index) {
            if (index >= 0 && index < this.arr.length) {
                this.arr.splice(index, 1);
                this.size--;
                this.arr.sort((a, b) => a - b);
            } else {
                throw 'Invalid index!';
            }

        },
        get(index) {
            if (index >= 0 && index < this.arr.length) {
                return this.arr[index];
            } else {
                throw 'Invalid index!'
            }
        },
    }

    return obj;
}

let list = createSortedList();
list.add(5);
list.add(6);
//console.log(list.get(3));
list.add(7);
console.log(list.get(1));
console.log(list.size);
list.remove(1);
console.log(list.get(1));
