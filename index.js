const refs={
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[ data-value="mins"]'),
    secs:document.querySelector('[ data-value="secs"]'),
}

const CountdownTimer = {
    timerId: null,
    start(date) {
        const targetTime = (date).getTime();
      this.timerId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = targetTime - currentTime;
            const timeComponents = getTimeComponents(deltaTime);
        
             upDateTime(timeComponents);
        }, 1000);
       
    },
    stop(date) {
        const targetTime = (date).getTime();
        const currentTime = Date.now();
        if (targetTime === currentTime) {
            clearTimeout(this.timerId);
             const timeComponents = getTimeComponents(deltaTime);
        
             upDateTime(timeComponents);
            return;
        }
    },
};

CountdownTimer.start(new Date('aug 23, 2021'));
CountdownTimer.stop(new Date('aug 23, 2021'));

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
function upDateTime(data) {
    refs.days.textContent = data.days;
    refs.hours.textContent = data.hours;
    refs.mins.textContent = data.mins;
    refs.secs.textContent = data.secs;

};