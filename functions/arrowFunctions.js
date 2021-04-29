

// let hi = () => {
//     console.log('hi');
// }

//  arrow functions do not get hoisted


//  2 types of arrow functions
// - consice body
// - block body

// ! consice body

let hi = () => console.log('hi');

// !block body

// let hi = () => {
//     console.log('hi');
// }

let apples = x => console.log('there are ${x} apples.');
apples(10);


let bananas = (x, y) => {
    console.log(`there are ${x} bananas`);
}
bananas(10);