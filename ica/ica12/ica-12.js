const apiURL = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

async function getQuote(){
  try {
    //fetching quotes from api
    const response = await fetch(apiURL);
    const data = await response.json();

    contentEL.innerText = data.content;
    quoteauthorEl.innerText = "~ " + data.author;

    btnEl.innerText = "get quote";
    btnEl.disabled=false;
    
  } catch (error) {
    contentEL.innerText = "error";
    quoteauthorEl.innerText = "error";

    btnEl.innerText = "get quote";
    btnEl.disabled=false;
  }

function displayQuote(quote) {
  const quoteText = document.querySelector('js-quote-text');
  quoteText.textContent = quote;
}

const newQuoteButton = document.querySelector('js-new-quote');
btnEl.addEventListener("click", getQuote);
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

