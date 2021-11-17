'use strict';

const TIMER_DEADLINE = new Date(2021, 10, 18);

const timer = {
  intervalId: null,

  start(rootSelector, deadline) {
    this.intervalId = setInterval(() => {
      const diff = deadline - new Date();
      if (diff <= 0) {
        this.stop();
      }

      const { days, hours, minutes, seconds } = this.getTimeComponents(diff);
      rootSelector.querySelector('.js-timer__days').textContent = this.pad(days);
      rootSelector.querySelector('.js-timer__hours').textContent = this.pad(hours);
      rootSelector.querySelector('.js-timer__minutes').textContent = this.pad(minutes);
      rootSelector.querySelector('.js-timer__seconds').textContent = this.pad(seconds);
      rootSelector.querySelector('.js-timer__days').dataset.title = this.declensionNum(days, [
        'день',
        'дня',
        'дней',
      ]);
      rootSelector.querySelector('.js-timer__hours').dataset.title = this.declensionNum(hours, [
        'час',
        'часа',
        'часов',
      ]);
      rootSelector.querySelector('.js-timer__minutes').dataset.title = this.declensionNum(minutes, [
        'минута',
        'минуты',
        'минут',
      ]);
      rootSelector.querySelector('.js-timer__seconds').dataset.title = this.declensionNum(seconds, [
        'секунда',
        'секунды',
        'секунд',
      ]);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },

  getTimeComponents(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    return { days, hours, minutes, seconds };
  },

  pad(value) {
    return String(value).padStart(2, '0');
  },

  declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  },
};

timer.start(document.querySelector('.timer'), TIMER_DEADLINE);
