const loader = document.getElementById('loader');

function showLoader(){
    loader.classList.add('show');
}

function hideLoader(){
    loader.classList.remove('show');
}

function searchCode(query) {
    showLoader();
    const url = `https://chrome-extensionn-dsa-api.onrender.com/snippet/${query}`
    fetch(url)
        .then(res => res.json())
        .then(jsonData => {
            hideLoader();   
            const result = jsonData[0].image;
            renderResult(result)
        })
        .catch((error) => {
            document.getElementById("img").innerHTML = error.name;
        })
}

function renderResult(result) {
    const imgContainer = document.getElementById('img');
    imgContainer.innerHTML = '';
    const image = document.createElement("img");
    image.src = result;
    imgContainer.appendChild(image);
}

window.onload = () => {
    let input = document.getElementById('input')
    let button = document.getElementById('button')

    button.onclick = (event) => {
        searchCode(input.value.toLowerCase().replace(/\s+/g, ''))
        input.value = "";
    }
}

// const speakIt = document.getElementById('button-speak');
// let input = document.getElementById('input');

// let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// let recognition = new SpeechRecognition();

// speakIt.addEventListener("click", function (){
//     recognition.start(); 
//     console.log('hello')
// })

// recognition.onresult = (e) => {
//     let transcript = e.results[0][0].transcript;
//     input.value = transcript.replace(/\.|\s/g,'').toLowerCase();
// }

