//Write a JS function that stores the name and age of two persons in objects and then filters them by minimum age

function filterByAge([minAgeValue, nameA, ageA, nameB, ageB]) {
    let personA = {name: nameA, age: Number(ageA)};
    let personB = {name: nameB, age: Number(ageB)};

    let minAge = Number(minAgeValue);

    // if (Number(ageA) >= minAge)
    //     console.log(personA);
    //
    // if (Number(ageB) >= minAge)
    //     console.log(personB);

    if  (personA.age >= minAge){
        console.log(personA);
    }
    if  (personB.age >= minAge){
        console.log(personB);
    }
}

filterByAge(['12', 'Ivan', '15', 'Asen', '9']); //{ name: 'Ivan', age: 15 }