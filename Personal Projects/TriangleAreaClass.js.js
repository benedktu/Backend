// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
//   *getSides() {
//     yield this.height;
//     yield this.width;
//     yield this.height;
//     yield this.width;
//   }
// }

// const square = new Rectangle(10, 10);

// console.log(square.area); // 100
// console.log([...square.getSides()]); // [10, 10, 10, 10]

// AREA OF A TRIANGLE: 1/2base x height
const AreaOutputArray = [];

class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }

  // Get Area
  get area() {
    return this.calcArea();
  }

  //  Method
  calcArea() {
    return (this.base / 2) * this.height;
  }
}

// Receive user dimensions
const userBase = prompt("what is the base?");
const userHeight = prompt("what is the triangle height?");


// Output Area of Triangle
const output = new Triangle(userBase, userHeight);
console.log(`${output.area} square`); // can also be: console.log(`${output.calcArea()} square`); 
