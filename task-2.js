const person = {
  firstName: "Tim",
  age: 28,
  greet: greet
}

// Your code here!
function greet(greeting) {
  return `${greeting[0].toUpperCase()}${greeting.slice(1)}, my name s ${this.firstName}`;
}

console.log(person.greet("hi")) // Hi, my name is Tim
console.log(person.greet("hey")) // Hey, my name is Tim
console.log(person.greet("hello")) // Hello, my name is Tim