const greet1 = function(firstName) {
    return `Hello there', ${firstName}`;
}

console.log(greet1('John'));

// Same code using the arrow function

const greet2 = firstName => `Hello there, ${firstName}`;

console.log(greet2('Jane'));
