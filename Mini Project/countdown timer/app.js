
const countdown = () => {
    const countDate = new Date("may 18 , 2024 ,00:00:00").getTime();
    const now = new Date(). getTime();
    const gap = countDate - now;



    //How the fuck does work?

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const textDay = Math.floor (gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textminute = Math.floor((gap % hour) / minute);
    const textsecond = Math.floor((gap % minute) / second);
    

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textminute;
    document.querySelector('.second').innerText = textsecond;

    console.log(gap);
 

}

setInterval(countdown,1000);