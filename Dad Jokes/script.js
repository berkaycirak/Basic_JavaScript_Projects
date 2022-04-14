const jokeEl = document.getElementById('joke');
const button = document.getElementById('jokeBtn');

button.addEventListener('click', getJoke);

// Using ASYNC/AWAIT
async function getJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com/', config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}

// Using .then

// function getJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   fetch('https://icanhazdadjoke.com/', config)
//     .then(response => response.json())
//     .then(data => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
