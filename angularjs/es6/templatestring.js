//node bootstraps the engine

let msg = "Hello World";
console.log(msg);

msg = 'Hello \n' +
    'my \n' +
    'name \n' +
    'is \n' +
    'Pradnya';

console.log(msg);

//template string

msg = `Hello
    my
    name
    Pradnya`;
console.log(msg);

//variable substitution
let name = "pradnya";
msg = `Hello
    my
    name
    ${name}`;
console.log(msg);


