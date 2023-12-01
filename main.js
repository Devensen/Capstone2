const btn = document.getElementById('btn');
const output = document.getElementById('output');
const nav = document.querySelector('nav');

const navData = [
  {
    navItem: "Home",
    navLink: "#"
  },
  {
    navItem: "About",
    navLink: "https://www.linkedin.com/in/rick-e-372bab248/"
  },
   {
    navItem: "Contact",
    navLink: "mailto:evensenrick@gmail.com" 
  }
]

generateDynamicNav = () => {
  navData.forEach(e => {
    const navLink = document.createElement('div');
    navLink.innerHTML = `<a href="${e.navLink}">${e.navItem}</a>`;
    nav.appendChild(navLink);
  })
}
generateDynamicNav();

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


btn.addEventListener('click', getQuote);

setInterval(updateCountdown, 1000);