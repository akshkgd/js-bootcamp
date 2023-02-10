// functions, Conditionals, Loops

function grinder(items){
    console.log('grinding...', items)
}

function split(){
    let amount = document.getElementById('amount').value;
    let persons = document.getElementById('persons').value;
    let bill = Math.floor(amount / persons) ;
    document.getElementById('result').innerText = bill;
}
// conditionals
// let age = 2;
// if(age > 18){
//     console.log('eligible to vote')
// }
// else{
//     console.log('not eligible')
// }

let weather = 'cold'

if(weather == 'sunny'){
    console.log('normal cloths')
}
else if(weather == 'rainy'){
    console.log('raincoat')
}
else if(weather == 'cold'){
    console.log('warm cloths')
}

function check(){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;

    if(age > 18){
        document.getElementById('result').innerText = 'Eligible'
    }
    else{
        document.getElementById('result').innerText = 'Not Eligible'
    }
}
let users = []
// function to display the users
function renderUser(){
    let container = document.getElementById('users-container');
    container.innerHTML = ''
    users.map((user)=>{
        let userDiv = document.createElement('div');
        userDiv.classList.add('user');
        let name = document.createElement('p');
        let email = document.createElement('p');
        name.innerText = user.name;
        email.innerText = user.email;
        container.appendChild(userDiv);
        userDiv.appendChild(name)
        userDiv.appendChild(email)
    })
    
}
// function to add the data
function add(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let tempUser = {
        name: name,
        email: email
    }
    users.push(tempUser);
    renderUser()
    console.log(users)
}