let weather = 75;

if (weather< 70){
    console.log('wear a jacket');
}
else {
    console.log('no jacket required');
}

/*
Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
Silver:
    If It is your name, console log 'Hello, my name is <name>'
Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let myName = 'Daniel';


if (myName === 'Hope') {
    console.log(myName);
    console.log('hello my name is ' + myName);
}
else {
    console.log('hello is your name ' + myName + '?');
}

// else if statements

let newName = 'hope';

if(newName == 'Waldo') {
    console.log('hello ' + newName);
}
else if (newName === 'hope') {
    console.log('hello ' + newName);
}
else {
    console.log('i dont know ' + newName);
}