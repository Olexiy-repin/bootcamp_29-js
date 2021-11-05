'use strict';
/*
 * Наследование с extends и super
 */

class Manager {
  constructor({ firstName, lastName, age, numberOfSales } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.numberOfSales = numberOfSales;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  doManagerWork() {
    console.log('Я занимаюсь продажами');
  }
}

class Developer {
  constructor({ firstName, lastName, age, completedProjects } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedProjects = completedProjects;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  doDeveloperWork() {
    console.log('Я пишу код');
  }
}

const myra = new Manager({ firstName: 'Ernest', lastName: 'Fox', age: 20, numberOfSales: 5 });
console.log(myra);
console.log(myra.getFullName());
myra.doManagerWork();

const jesus = new Developer({
  firstName: 'Roy',
  lastName: 'Miller',
  age: 25,
  completedProjects: 10,
});
console.log(jesus);
console.log(jesus.getFullName());
jesus.doDeveloperWork();
