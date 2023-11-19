let btn = document.getElementById('btn');
let output = document.getElementById('output');


btn.addEventListener('click', getQuote);
  const api_url ="https://api.quotable.io/quotes/random";

  async function getapi(url)
  {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
  }

  getapi(api_url);
  

  // below is for the JS code for displaying the countdown to New Years
  























 
 
   







