'use strict';
const accordionBtns = document.querySelectorAll('.js-accordion-btn');

const onAccordionBtnClick = event => {
  const currentBtn = event.currentTarget;
  const panel = currentBtn.nextElementSibling;
  currentBtn.classList.toggle('active');

  if (currentBtn.classList.contains('active')) {
    panel.style.display = 'block';
  } else {
    panel.style.display = 'none';
  }
};

accordionBtns.forEach(button => {
  button.addEventListener('click', onAccordionBtnClick);
});
