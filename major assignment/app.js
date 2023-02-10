let examCenters= ['new delhi', 'kolkata', 'allahabad', 'lucknow', 'chennai', 'hyderabad', 'banglore', 'ranchi', 'faridabad', 'jamshedpur', 'shimla' ]
let users = []

function enrollUser(name, email){
    let findUser = users.filter((user)=>{
            return user.email == email
    })
    if(findUser.length == 0){
        let randomExamCenter = Math.floor(Math.random()*examCenters.length)
        document.getElementById('userName').innerText = name;
        document.getElementById('userEmail').innerText = email;
        document.getElementById('exam').innerText = examCenters[randomExamCenter]
        let tempUser = {
        name: name,
        email: email,
        examCenter: examCenters[randomExamCenter]
    }
    users.push(tempUser);
    

    console.log(users);
    document.getElementById('success').style.display = 'block';
    }
    else{
        alert('You are alredy registered!!')
    }
    
}

function register(){
    document.getElementById('success').style.display = 'none';
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    enrollUser(name, email)
}