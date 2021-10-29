const content = document.querySelector(".content");
const button = document.querySelector(".btn");
const img = document.querySelector(".container img");
const URL = "https://api.chucknorris.io/jokes/random";

button.addEventListener("click", () => {
    fetch(URL)
        .then((data) => data.json())
        .then((response) => displayData(response))
        .catch((error) => console.log(error));
});

function displayData({ value: randomJoke }) {
    // shake image
    img.classList.add("shake-img");
    content.innerHTML = randomJoke;
    // setting the time randomly
    const random = Math.floor(Math.random() * 1000);
    setTimeout(() => {
        img.classList.remove("shake-img");
    }, random);
}
