'use strict';

class Circle {
     constructor (radius){
          this.radius = radius;
     }

     get diameter() {
          return (this.radius * 2);
     }
     // calculateable field -- usage: Circle.diameter = 10; without ()
     set diameter(d) {
          this.radius = d / 2;
     }

     get area() {
          return (Math.PI * this.radius * this.radius);
     }
}

var c = new Circle(5);
c.area = 100;
//console.log(c.area); here only getter, gives error
console.log(c.diameter);
c.diameter = 100;
console.log(c.diameter);

var c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
