"use strict";

const sum = (a, b) => a + b;
sum(3, 5);
class Hero {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this.name;
  }
  set name(newName) {
    this.name = newName;
  }
}
const another = new Hero('mango');