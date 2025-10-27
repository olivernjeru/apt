const greet1 = function(firstName, lastName) {
    return `Hello there', ${firstName} ${lastName}`;
}

console.log(greet1('John', 'Doe'));

// Same code using the arrow function

const greet2 = (firstName, lastName) => `Hello there, ${firstName} ${lastName}`;

console.log(greet2('Jane', 'Doe'));
