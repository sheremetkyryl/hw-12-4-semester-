class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.timerDom = document.querySelector(this.selector);

    this.daysDom = document.querySelector('[data-value="days"]');
    this.hoursDom = document.querySelector('[data-value="hours"]');
    this.minsDom = document.querySelector('[data-value="mins"]');
    this.secsDom = document.querySelector('[data-value="secs"]');

    this.start();
  }

  start() {
    setInterval(() => {
      const timeComponents = this.getTimeComponents()
      this.updateDom(timeComponents)
    }, 1000);
  }

  getTimeComponents() {
    const currentTime = Date.now();
    const time = this.targetDate.getTime() - currentTime;

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, mins , secs}
  }

  updateDom({ days, hours, mins, secs }) {
    this.daysDom.textContent = days;
    this.hoursDom.textContent = String(hours).padStart(2, "0");
    this.minsDom.textContent = String(mins).padStart(2, "0");;
    this.secsDom.textContent = String(secs).padStart(2, "0");
}
}


new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 31, 2025"),
});


