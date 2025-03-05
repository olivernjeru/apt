const greet2 = (firstName, lastName) => {
    if(firstName && lastName) {
        return `Hello there, ${firstName} ${lastName}`;
    } else {
        throw new Error('Both names required for greeting');
}
}

console.log(greet2('Jane', 'Doe'));
