const refs={
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[ data-value="mins"]'),
    secs:document.querySelector('span[ data-value="secs"]'),
}

   const CountdownTimer = {
    start() {
        const targetTime = (new Date('sep 17, 2021')).getTime();
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = targetTime - currentTime;
            const timeComponents = getTimeComponents(deltaTime);
            const { days, hours, mins, secs } = timeComponents;
             upDateTime({ days, hours, mins, secs });
        }, 1000);
       
    },
    stop() {
        
    },
};

CountdownTimer.start();

/*new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});*/
function pad(value) {
    return String(value).padStart(2, '0');
};

function getTimeComponents(time) {

    const days =pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours =pad( Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins =pad( Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs =pad( Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
};
function upDateTime({ days, hours, mins, secs }) {
    refs.days.textContent = '${ days }';
    refs.hours.textContent = '${hours}';
    refs.mins.textContent = "${mins}";
    refs.secs.textContent = '${secs}';

};