let numbers = [1,2,3,4,5,6,7,8,9]
let users = [
    {name: 'ashish', email: 'ashish@gmail.com'},
    {name: 'yash', email: 'yash@gmail.com'},
    {name: 'aarti', email: 'aarti@gmail.com'},
    {name: 'nayan', email: 'nayan@gmail.com'},
    {name: 'bhavna', email: 'bhavna@gmail.com'},
    {name: 'ashish', email: 'ashish22@gmail.com'},
]
// loops
// for(let i=0; i<=5; i++){
//     console.log(i, 'ashish')
// }

// calculate the sqr
for(let i=0; i<=8; i++){
    // console.log(numbers[i] * numbers[i])
}

// print the names
for(let i=0; i<users.length; i++){
    // console.log(users[i].name)
}

// arrow functions => syntax (es6)
function functionName(parameter){
    // syntax
}
// mapping and filters
functionName = (parameter) =>{
    // syantax
}

// add = (num1, num2)=>{
//     console.log('The sum is: ', num1 + num2)
// }
// add(2,3)
// anonymous functions => ()=>{}
// array mapping

let sqr = numbers.map((n)=>{
    return n*n;
})

// console.log(sqr)

let names = users.map((user)=>{
    return user.name
})
// console.log(names)
// array filters

let result = numbers.filter((n)=>{
    return (n%2 == 1)
})


console.log(result)


let name = users.filter((user)=>{
    return user.name == 'ashish'
}).map((user)=>{
    return user.name
})

console.log(name)