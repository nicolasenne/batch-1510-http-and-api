// TODO - Fetch an activity with the Bored API - Let's psuedocode!


// button.addEventListener("click", (event) => {
  //   const options = ["Do your flashcards", "Read a book", "Eat breakfast"];
  //   const randomNumber = Math.floor(Math.random() * 3);
  
  //   event.currentTarget.innerText = options[randomNumber];
  // });
  
  
  const url = 'https://www.boredapi.com/api/activity/'
  const button = document.querySelector('.btn-warning');
  const h2 = document.querySelector('#activity');

  button.addEventListener("click", (event) => {
    fetch(url)
    .then(response => response.json())
    .then((abacate) => {
      h2.innerText = abacate.activity
    });
  });