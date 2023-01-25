// variables, Data types, arrays and objects

// variable => (var), let and const 


// var name = 'ashish';
// let email = 'ashish@gmail.com';

// const id = '123';
// id = '12345'
// console.log(id)

// data types
let name = 'ashish' // string
console.log(typeof name)

let age = 24.45; //number
console.log(typeof age)

let isActive = 'true'; //boolean
console.log(typeof isActive)

let items = ['milk', 'bread', 'butter'] //array => object
// items[2] = 'maggie'
// console.log(items);
// manipulating the array
// items.pop();
// items.push('rice')

// splice => startIndexNumber, DeleteCount, Value
items.splice(1, 1, 'choclate', 'perfume')

// console.log(items)

// object
let user = {
    name: 'ashish', 
    email: 'ashish@gmail.com'
}
delete user.email;
user.address = 'Allahabad'
// console.log(user)

// array of objects
let users = [
    {name: 'ashish', email:'ashish@gmail.com', phone: 1234567890},
    {name: 'arpit', email:'arpit@gmail.com', phone: 1234567890},
    {name: 'yash', email:'yash@gmail.com', phone: 1234567890},
    {name: 'nayan', email:'nayan@gmail.com', phone: 1234567890},
    {name: 'bhavna', email:'bhavna@gmail.com', phone: 1234567890}
]
console.log(users[3].email)