class Person{
     constructor(first, last, age, email){
          this.firstName = first;
          this.lastName = last;
          this.age = age;
          this.email = email;
     }

     toString(){
          return '${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})';
     }

}


function getPersons(){


     var maria = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
     var softUni = new Person('SoftUni');
     var stefan = new Person('Stephan', 'Nikolov', 25 );
     var peter = new Person('Peter', 'Kolev', 24, 'ptr@gmail.com');

     var result = [maria, softUni, stefan, peter];
     return result;
}

console.log(getPersons());
