// let hi = () => {
//     return 'hi';
// }

// let newName = hi();

// console.log(newName);

// the keyword return brings data out of the function , we need a new cariable to hold the value of the return and when its called, the function becomes the value


// let math = (numOne, numTwo) => {
//     let total = numOne + numTwo;
//     return total;
// }

// let sum = math(1,2);
// let sum2 = math(5293, 12394);
// console.log(sum);
// console.log(sum2);

/*
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/

function tipCalculator(price) {
    let tip = (price*.2);
    return tip;
}
let thisTip = tipCalculator(30);
console.log(thisTip);



