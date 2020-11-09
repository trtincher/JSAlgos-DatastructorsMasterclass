// JavaScript Classes, introduced in ECMAScript 2015, are primarily syntactic sugar over JavScript’s existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.

//import, keyword 'this' behavior in classes. Inside all of our instance methods and constructor, the keyword 'this' refers to the object created from that class (also known as an instance)

//create the class with 'class' key word
class Point {
  //construct the base parameters of the class
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  //create an instance method
  printPoint() {
    console.log(`[${this.x}, ${this.y}]`);
  }

  //create a class Method with 'static' key word
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

//creating instances of a class
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

//call instance method
p1.printPoint();

//call class method
Point.distance(p1, p2);
