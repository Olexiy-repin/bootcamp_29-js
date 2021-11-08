'use strict';
/*
 * Наследование с extends и super
 */

class User {
  constructor({ firstName, lastName, age } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Manager extends User {
  static test = 'my test';
  #email = 'test@gmail.com';

  constructor({ numberOfSales, ...otherProps } = {}) {
    super(otherProps);
    this.numberOfSales = numberOfSales;
  }

  doManagerWork() {
    console.log('Я занимаюсь продажами');
  }
}

class Developer extends User {
  constructor({ completedProjects, ...otherProps } = {}) {
    super(otherProps);
    this.completedProjects = completedProjects;
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
