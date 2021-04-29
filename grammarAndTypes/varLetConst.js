//  ! Var vs Let

// var and let behave differently and operate the same

// const cannot be re-expressed

//  var is scoped to the nearest funct block
// let is scoped to the nearest enclosing block

// var

// var x = 12;

// function varTest() {
//     var x = 33;
//     if (1 == 1) {
//         var x = 45;
//         console.log(x);
//     }
//     console.log(x);
// }

// varTest();
// console.log(x);

let x = 12;

function letTest() {
    let x = 33;
    if (1 == 1) {
        let x = 45;
        console.log(x);
    }
    console.log(x);
}

letTest();
console.log(x);

// const

function constTest() {
    const scope = 1;
    if (true) {
        const scope = 2;
    }
    console.log(scope);
}
constTest();