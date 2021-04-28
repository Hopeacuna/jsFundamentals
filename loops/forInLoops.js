// ! for in loops

// great for iterating over values in an object
// properties in objects are whats called enumerable or 'countable'

let student = {
    name: 'jake from state farm',
    awesome: true,
    degree: 'insurance sales',
    age: 98
}

for(item in student ) {
    console.log(item);
    console.log(student[item]);
}

