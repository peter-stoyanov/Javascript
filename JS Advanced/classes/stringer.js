class Stringer {
     constructor (init_str, init_length) {
          this.innerString = init_str;
          this.innerLength = init_length;
     }

     //let start_str = this.init_str;

     increase(length) {
          this.innerLength += length;
     }

     decrease(length) {
          let res = this.innerLength -= length;
          if (res < 0) {
               this.innerLength = 0
          }else {
               this.innerLength = res;
          }
     }

     toString() {
          var l = this.innerLength;
          var x = this.innerString.length;
          if (l === 0) {
               return '...';
          }else if (l >= x) {
               return this.innerString;
          }else {
               return this.innerString.slice(0, l) + "...";
          }


     }

}

let a = new Stringer('abcd', 3);
//console.log(a);
//a.increase(2);
//console.log(a);
//a.decrease(4);
//console.log(a);
console.log(a.toString());

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
