/* **************************

1.  Create a function that returns a random quote from the array of
    quotes that's given..
    
********************************* */


const randomQuotes = [
    "Tomorrow is another day",
    "More people die from coconuts falling on their heads than from shark attacks",
    "hello world",
    "random radnom random random",
    "Russia is a large country",
    "Blue is a colour",
    "plastic takes a long time to degrade",
    "life laugh love"
];

function getRandomQuote() {
    let randomChoice = Math.floor(Math.random() * randomQuotes.length);
    return randomQuotes[randomChoice];
  }

const butt = document.querySelector("button");
const input = document.querySelector("#input");

console.log(document.readyState);

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Document is now ready");
    console.log(document.readyState);
});

// function randomQuoteWhenSiteLoaded() {
//     if (document.readyState = true) {
//         input.textContent = randomQuotes;
//     }
// }

console.log(getRandomQuote());


/* **************************

2.  Add a Random Quote button beneath the quote element. When the button is clicked, a new quote should be generated.

************************** */


butt.addEventListener("click", e => {
    input.value = getRandomQuote();
});

// .value cuz input

// .innerText or innerHTML if it were a div

// input.textContent = getRandomQuote

function clickForNewRandomQuote() {
    butt.addEventListener("click", input.textContent = getRandomQuote);
}

function clickForNewRandomQuote() {
    butt.addEventListener("click", e => {
        input.textHTML = getRandomQuote;
    });
}

