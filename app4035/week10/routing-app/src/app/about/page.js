import React from 'react';

export default function About() {
    const data = [
        {
            id: 1,
            name: 'John Doe',
            title: 'Director'
        },
        {
            id: 2,
            name: 'Jane Doe',
            title: 'Managing Director'
        }
    ];
    const listItems = data.map((employee) =>
        <li key={employee.id.toString()}>
            {employee.name} | {employee.title}
        </li>
    );
    return (
        <div>
            <h1>This is the About Page</h1>
            <p>Below are our staff members:</p>
            <ul>{listItems}</ul>
        </div>
    );
}

// initially we are using an array of objects that later returns an array of list items, a HTML element, in JSX format.
