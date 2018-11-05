function clockTime(){
    const hourHand = document.querySelector('.hour-hand');
    const minHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');
    // these const variables pulls the hour, min, second hand from the html

    let date = new Date ();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    // new variables cotaining data from the date object.

    let hourPosition = hour*360/12+((minute*360/60)/12);
    let minPosition = minute*360/60+((seconds*360/60)/60);
    let secondPosition = seconds*360/60;
    // new variables containg maths to work out how fast the hands shall move.

    hourHand.style.transform = `rotate(${hourPosition}deg)`;
    minHand.style.transform = `rotate(${minPosition}deg)`;
    secondHand.style.transform = `rotate(${secondPosition}deg)`;
    //adding a variable to a string

    setTimeout(clockTime, 1000);
}
clockTime();