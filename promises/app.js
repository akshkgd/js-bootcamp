// promise
// long task
console.log('registration started')

// setTimeout(()=>{
//     console.log('Registration done!')
// }, 2000)
// console.log('email send')

// let registration = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//         console.log('Registration done!')
//         resolve()
//         }, 2000)
       
// }).then(()=>{
//     console.log('email send')
// })

function fetchQuote(){
    fetch("https://type.fit/api/quotes")
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      let random = Math.floor(Math.random()*data.length)
      document.getElementById('quote').innerText = data[random].text;
      document.getElementById('author').innerText = data[random].author;

      // console.log(data[random].text);
    });
}

fetchQuote()