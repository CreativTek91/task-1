// Target array
const people = []

// Source data
const firstNames = ["Mark", "Sandra", "Dina", "Mikoel"]
const lastNames = ["Shark", "Mellow", "Saur", "Boomex"]
const ages = [18, 27, 31, 44]
const cities = ["New York", "Berlin", "Barcelona", "Windhoek"]

// Your code here!

console.log(people)

for (let i = 0; i < firstNames.length; i++) {
    const person = {
        firstName: firstNames[i],
        lastName: lastNames[i],
        age: ages[i],
        fullName: `${firstNames[i]} ${lastNames[i]}`,
        isAdult: ages[i] >= 18,
        introduce: function() { 
            return `Hi, my name is ${this.fullName} and I am ${this.age} years old from ${this.city}.`
        }
    }
    people.push(person)
}
console.log(people)