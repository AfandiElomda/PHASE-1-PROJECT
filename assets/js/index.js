const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
document.addEventListener('DOMContentLoaded', getJoke)

jokeText.addEventListener('mouseover',getJoke)

button.addEventListener('click', getJoke);
async function getJoke(){
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers:{
            'Accept': 'application/json'
        }
    });
    const jokeOb = await jokeData.json();
    jokeText.innerHTML = jokeOb.joke;
}