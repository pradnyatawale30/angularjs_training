// function declaration
function add(num1, num2) {
    return (num1 + num2);
}
console.log(add(10, 20));

// function expression
let sub = function (num1, num2) {
    return (num1 - num2);
}
console.log(sub(20, 10));

function operation(sub) {

}

//fat arrow function
let mul = (num1, num2) => {
    return (num1 * num2);
}
// or
let mul = (num1, num2) => (num1 * num2);
console.log(mul(20, 10));


