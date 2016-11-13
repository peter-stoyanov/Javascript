
function PersonTeacher() {

class Person {
     constructor(name, email) {
          this.name = name;
          this.email = email;
     }
}

class Teacher extends Person {
     constructor (name, email, subject) {
          super(name, email);
          this.subject = subject;
     }
}

// let p = new Person('pesho', 'p.s@gmail.com');
// console.log(p);
//
// let t = new Teacher('daskal', 'daskal@com', 'math');
// console.log(t);


//added for judge

return {Person, Teacher};
}
