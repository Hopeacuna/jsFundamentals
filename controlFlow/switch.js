// switch statements executes code depending on different classes
// it is often used with a break or a default keyword(both optional) 

//break" break out of switch block
// default: specifies some code to run if there is no case match

let officeChar = 'pam';

switch(officeChar) {
    case 'michael':
        console.log('my mind is going a mile an hour');
        break;
        case 'dwight': 
        console.log('perfectenschlag');
        break;
        case 'jim':
            console.log('bears. beets. battlestar galactica');
            break;
            default:
                console.log(officeChar);
}


/*
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/