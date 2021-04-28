// ! for of loops

// iterate over the value or an iterable object (strings and arrays included)
// iterable means to beable to parse through with numbers


// this doesnt work because the properties are not 'iterable'
let student = {
    name: 'jake from state farm',
    awesome: true,
    degree: 'insurance sales',
    age: 98
}

// for(item of student) {
//     console.log(item);
// }


let soupArray = [
    'potato',
    'broccoli',
    'carrot',
    'chicken',
    'chili'
];

for(soup of soupArray) {
    console.log(soup);
}