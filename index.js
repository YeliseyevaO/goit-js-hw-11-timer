const refs={
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[ data-value="mins"]'),
    secs:document.querySelector('[ data-value="secs"]'),
}

class CountdownTimer {
    constructor(){
       this.timerId = null;
       this.targetTime = targetTime;
};
    start() {
        const targetTime = (this.targetTime).getTime();
      this.timerId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = targetTime - currentTime;
            const timeComponents = getTimeComponents(deltaTime);
        
             upDateTime(timeComponents);
        }, 1000);
       
    }
    stop() {
        const targetTime = (this.targetTime).getTime();
        const currentTime = Date.now();
        if (targetTime < currentTime) {
            clearTimeout(this.timerId);
            refs.days.textContent = '00';
            refs.hours.textContent = '00';
            refs.mins.textContent = '00';
            refs.secs.textContent = '00';   
            return;
        }
    }
};

const countdownTimer = new CountdownTimer(
    targetTime= new Date('sep 22, 2021'),
);
countdownTimer.start();
countdownTimer.stop();


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
refs.days.textContent = days;
refs.hours.textContent = hours;
refs.mins.textContent = mins;
refs.secs.textContent = secs;
};