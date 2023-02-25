function playingCards(face, suit) {

    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = {
        'S': '♠',
        'H': '♥',
        'D': '♦',
        'C': '♣',
    }

    if (!validFaces.includes(face)) {
        throw new TypeError('Invalid face')
    } else if (suit in validSuits === false) {
        throw new TypeError('Invalid face');
    }

    const result = {
        face,
        suit,
        toString() {
            return this.face + validSuits[this.suit];
        }
    }

    return result;

}

console.log(playingCards('A', 'S'));
console.log(playingCards('10', 'H'));
console.log(playingCards('1', 'C'));