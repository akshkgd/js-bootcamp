let todos = []

function checkIntroStatus(){
    let count = todos.length;
    if(count > 0){
        let intro = document.getElementById('intro');
        intro.innerHTML = '';
        let title = document.createElement('h2');
        title.innerText = "Your Upcoming tasks";
        title.style.textAlign = 'left'
        intro.appendChild(title)
    }
}

function addTask(){
    let task = document.getElementById('task').value;
    todos.push(task);
    checkIntroStatus();
}