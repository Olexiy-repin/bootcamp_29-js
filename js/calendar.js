'use strict';
const calendarEl = document.querySelector('.calendar');
let prevTDEl;

const onCalendarElClick = event => {
  if (event.target.nodeName !== 'TD') {
    return;
  }

  const tdEl = event.target;

  if (prevTDEl === tdEl) {
    tdEl.classList.remove('active');
    return;
  } else if (prevTDEl) {
    prevTDEl.classList.remove('active');
  }

  prevTDEl = tdEl;
  tdEl.classList.toggle('active');
};

calendarEl.addEventListener('click', onCalendarElClick);
