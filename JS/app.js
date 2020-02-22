const interval = setInterval(function(){

    const oldDate = document.querySelector('.old-date');
    const newDate = new Date(oldDate.textContent);
    const currentDate = new Date();
    const uiDays = document.querySelector('.day');
    const uiHours = document.querySelector('.hour');
    const uiMinutes = document.querySelector('.minute');
    const uiSeconds = document.querySelector('.second');
    //Countdown
    let duration = (newDate.getTime()-currentDate.getTime());

    if(duration < 0){
        duration = (newDate.getTime()-newDate.getTime());
        // uiDays.textContent = 0;
        // uiHours.textContent = 0;
        // uiMinutes.textContent = 0;
        // uiSeconds.textContent = 0;
        cInterval();
    }else {
        //UI elements
        const seconds = Math.floor((duration / 1000) % 60) ;
        const minutes = Math.floor((duration / (1000*60)) % 60);
        const hours   = Math.floor((duration/ (1000*60*60)) % 24);
        const days = Math.floor(duration/ (1000 * 60 * 60 * 24));
        uiDays.textContent = days;
        uiHours.textContent = hours;
        uiMinutes.textContent = minutes;
        uiSeconds.textContent = seconds;
    }
},1000)

function cInterval(){

    document.querySelector('.no-events').style.display = 'block';
    clearInterval(interval);
}
