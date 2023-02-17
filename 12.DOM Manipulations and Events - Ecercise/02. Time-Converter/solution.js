function attachEventsListeners() {

    let daysElement = document.getElementById('days'); 
    let hoursElement = document.getElementById('hours'); 
    let minutesElement = document.getElementById('minutes'); 
    let secondsElement = document.getElementById('seconds'); 

    const obj = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function convert(value, unit) {
        let days = value / obj[unit];

        return {
            days: days,
            hours: days * obj.hours,
            minutes: days * obj.minutes,
            seconds: days * obj.seconds,
        };
    }

    document.getElementById('daysBtn').addEventListener('click',onConvert);
    document.getElementById('hoursBtn').addEventListener('click',onConvert);
    document.getElementById('minutesBtn').addEventListener('click',onConvert);
    document.getElementById('secondsBtn').addEventListener('click',onConvert);

    function onConvert(event) {
        let inputElement = event.target.parentElement.querySelector('input[type = "text"]');
        let time = convert(Number(inputElement.value), inputElement.id);
        
        daysElement.value = time.days;
        hoursElement.value = time.hours;
        minutesElement.value = time.minutes;
        secondsElement.value = time.seconds;
    }

}

// Create a program that converts different time units.
// Your task is to add a click event listener to all [CONVERT] buttons. When a button is clicked,
// read the corresponding input field, convert the value to the three other time units
// and display it in the input fields.
// One day is equal to 24 hours/1440 minutes/86400 seconds.
// Whichever button we click, the input fields should change depending on the added value on the left.
// For example, if we write 48 hours and click convert the days, the field value should change to 2.