function attachGradientEvents() {

    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    function gradientMouseoverHandler (e) {
        console.log(e);
        let percent = Math.trunc((e.offsetX / e.target.offsetWidth) * 100);
        resultElement.textContent = `${percent} %`; // precent + '%';
    }

    const gradientMouseoutHandler = (e) => {
        resultElement.textContent = '';
    };

    gradientElement.addEventListener('mousemove', gradientMouseoverHandler);
    gradientElement.addEventListener('mouseout', gradientMouseoutHandler);
}
// function attachGradientEvents() {
//     let gradient = document.getElementById('gradient');
//     gradient.addEventListener('mousemove', gradientMove);
//     gradient.addEventListener('mouseout', gradientOut);
//     function gradientMove(event) {
//       let power = event.offsetX / (event.target.clientWidth - 1);
//       power = Math.trunc(power * 100);
//       document.getElementById('result').textContent = power + "%";
//     }
//     function gradientOut(event) {
//       document.getElementById('result').textContent = "";
//     }
//   };


// Write a program that detects and displays how far along a gradient the user has moved their mouse.
// The result should be rounded down and displayed as a percentage inside the <div> with id "result". 
  