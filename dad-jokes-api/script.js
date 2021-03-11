const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',generateJoke)

generateJoke()


/* one way to do
function generateJoke() {
    fetch('https://icanhazdadjoke.com'), {
        headers: {
            'Accept': 'application/jason'
        }
    }
}
*/

function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke
    })
}