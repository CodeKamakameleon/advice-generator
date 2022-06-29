// ATTEMPT 1
const BASE_URL = "https://api.adviceslip.com";

const getAdvice = () =>
  fetch(`${BASE_URL}/advice`)
    .then((result) => {
      if (!result.ok) return new Error("Oh no, it broken");
      return result.json();
    })
    .catch((err) => {
      return new Error(err);
    });

getAdvice().then((advice) => {
  console.log({ advice });
});

const adviceTemplate = document.querySelector("#advice-template");
const renderQuote = (quote) => {
  const adviceElement = adviceTemplate.content.cloneNode(true);
  adviceElement.querySelector(".advice").innerText = quote.advice;
  advice.innerText = quote.advice;
  return adviceElement;
};

const app = document.querySelector("#app");
const renderCards = async () => {
  const advice = await advice();

  console.log({ advice });

  advice.results.forEach((quote) => {
    app.appendChild(renderQuote(quote));
  });
};

renderCards();

// ATTEMPT 2

// const dice = document.querySelector(".dice_wrapper");
// const id = document.querySelector(".advice_num");
// const advice = document.querySelector(".advice");

// function loadQuote() {
//   fetch("https://api.adviceslip.com/advice")
//     .then((response) => {
//       return response.json();
//     })
//     .then((response) => {
//       id.innerHTML = `Advice #${response.slip.id}`;
//       advice.innerHTML = `&#8220${response.slip.advice}&#8221`;
//     });
// }

// dice.addEventListener("click", loadQuote);

// ATTEMPT 3

// const button = document.querySelector("button");
// const id = document.querySelector("#advice_num");
// const advice = document.querySelector(".advice");

// const url = "https://api.adviceslip.com/advice";

// button.addEventListener("click", async () => {
//   const response = await fetch(url);
//   const json = await response.json();
//   const { advice, id } = json.slip;
//   id.textContent = id;
//   advice.textContent = advice;
// });

// button.addEventListener("click");
