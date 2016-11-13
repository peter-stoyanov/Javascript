//added for judge
// function PersonTeacher() {

class Person {
     constructor(name, email) {
          this.name = name;
          this.email = email;
     }

     toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
}

class Teacher extends Person {
     constructor (name, email, subject) {
          super(name, email);
          this.subject = subject;
     }

     toString() {
            return super.toString().slice(0, -1) + `, subject: ${this.subject})`;
        }
}

class Student extends Person {
     constructor(name, email, course){
          super(name, email);
          this.course = course;
     }

     toString() {
           return super.toString().slice(0, -1) + `, course: ${this.course})`;
       }
}

//debugging
let p = new Person('pesho', 'p.s@gmail.com');
console.log(p);
console.log(p.toString());

let t = new Teacher('daskal', 'daskal@com', 'math');
console.log(t);


//added for judge
// return {Person, Teacher, Student};
// }
