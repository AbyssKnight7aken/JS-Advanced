function cookingByNumbers(...input) {

    let num = Number(input.shift());

    const obj = {
        chop() { num /= 2 },
        dice() { num = Math.sqrt(num); },
        spice() { num += 1; },
        bake() { num *= 3; },
        fillet() { num -= num * 0.2; },
    }

    input.forEach(command => { obj[command](), console.log(num) });
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')