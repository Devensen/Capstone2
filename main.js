const btn = document.getElementById('btn');
const output = document.getElementById('output');

const countdownContainer = document.getElementById("countdown");

async function getQuote()
{
  const url ="https://api.quotable.io/quotes/random";
  const response = await fetch(url);
  let data = await response.json();

  const quoteOutput = document.getElementById('output');
  quoteOutput.innerHTML = `"${data[0].content}" - ${data[0].author}`;
  quoteOutput.style.display = 'flex';
}

function updateCountdown() {
  
  let newYear = new Date("January 1, 2024 00:00:00");
  let currentTime = new Date();

  let diff = (newYear - currentTime);

  let days = Math.floor(diff / (1000 * 60 * 60 * 24))
  let hours = Math.floor((diff % (1000 + 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((diff % (1000 * 60)) / 1000)

  console.log(`${days} : ${hours} : ${minutes} : ${seconds}`)

  countdownContainer.innerHTML = `<p>${days} : ${hours} : ${minutes} : ${seconds}</p>`;
}
const listEl = document.querySelector('ul');

fetch('./quote.json')
.then(res => res.json())
.then(data => {
  data.foreach(post => {
    listEl.insertAdjacentHTML('beforeend', `<li>${post.quote}<li/>`);
  });
  
  
});

btn.addEventListener('click', getQuote);

setInterval(updateCountdown, 1000);