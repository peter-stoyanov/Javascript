class Rectangle {
     constructor(width, height, color){
          this.width = width;
          this.height = height;
          this.color = color;
     }

     calcArea() {
          return(this.height * this.width);
     }
}


var rec1 = new Rectangle(40,60,'red');
console.log(rec1.width);
console.log(rec1);
var rec2 = new Rectangle(40,'red');
console.log(rec2);
console.log(rec1.calcArea());
console.log(rec2.calcArea());
