

function roll(){
    let dice = document.getElementById('dice');
    let audio = document.getElementById('audio');
    audio.play();
    dice.classList.add('animate');
    dice.innerText = '';

    let random = Math.floor(Math.random()* 6);
    if(random == 0){
        random = Math.floor(Math.random()* 6);
    }
    setTimeout(()=>{
        dice.classList.remove('animate');
        dice.innerText = random;
    },1000)
}

