let person1 = {
    name: 'macy',
    age: 24,
    canVote: true
}


let person1 = {
    name: 'jeremy',
    age: 15,
    canVote: false
}

let person1 = {
    name: 'tyler',
    age: 28,
    canVote: true
}

function Person(name, age, canVote) {
this.name = name;
this.age = age;
this.canVote = canVote;
}
console.log(typeof Person);


//  for constructor functions, the name should be capitalized
// this gives us the ability to refer back to whatever called or activates it this in this example refers to person

let person4 = new Person('james', 80, true);

console.log(person4);


