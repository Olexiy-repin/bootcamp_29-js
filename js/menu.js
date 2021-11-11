'use strict';

class Menu {
  #menuRef;
  constructor(rootSelector) {
    this.#menuRef = rootSelector;
    this.#menuRef.addEventListener('click', this.#onMenuBtnClick.bind(this));
  }

  load() {
    alert('Я буду что-то грузить');
  }

  save() {
    alert('Я буду что-то сохранять');
  }

  search() {
    alert('Я буду что-то искать');
  }

  #onMenuBtnClick(event) {
    const btnEl = event.target;
    const btnAction = btnEl.dataset.action;

    this[btnAction]();
  }
}

new Menu(document.querySelector('.js-menu'));
