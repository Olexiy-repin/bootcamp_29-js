'use strict';
const messagesWrapper = document.querySelector('.js-messages-wrapper');

const onCloseBtnClick = event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const closeBtn = event.target;
  const message = closeBtn.closest('.message');

  message.style.display = 'none';
};

messagesWrapper.addEventListener('click', onCloseBtnClick);
