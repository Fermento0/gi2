const people = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age:35}
];

const person = people.find(person => person.name === 'Bob');

console.log(person);