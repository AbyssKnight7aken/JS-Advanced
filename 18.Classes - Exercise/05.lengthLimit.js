class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
    }

    increase(length) {
        this.innerLength += Number(length);
    }
    decrease(length) {
        this.innerLength -= Number(length);
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerLength === 0) {
            return '...'
        } else if (this.innerLength < this.innerString.length) {
            return this.innerString.slice(0, this.innerLength) + '...';
        } else {
            return this.innerString.slice(0, this.innerLength);
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test