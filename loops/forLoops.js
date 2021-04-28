// !Loops 

// offers a quick way to do something repeatedly or loop over something

// a loop has 3 parts
// initial Expression
// condition
// and increment expression


// set i to 0 while i = ledd than 10 then i++ (add 1)

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for(let i = 0; i <= 20; i+= 2){
//     console.log(i);
// }

// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

// for (let i = 0; i >= -24; i-= 2) {
//     console.log(i);
// }

let myName = 'hope';
console.log(myName.length);

for (let i = 0; i < myName.length; i++ ) {
    console.log(myName[i]);
}

let sum = 0;

for (let i = 0; i <= 50; i++ ) {
    sum += i;
    console.log(sum);
}