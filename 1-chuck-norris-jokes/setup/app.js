const content = document.querySelector(".content");
const button = document.querySelector(".btn");
const img = document.querySelector(".container img");
const URL = "https://api.chucknorris.io/jokes/random";

button.addEventListener("click", () => {
    getRandomJoke(URL);
});

function getRandomJoke(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status === 200) {
            // shake image
            img.classList.add("shake-img");
            const { value: randomJoke } = JSON.parse(this.responseText);
            content.innerHTML = randomJoke;
            // setting the time randomly
            const random = Math.floor(Math.random() * 1000);
            setTimeout(() => {
                img.classList.remove("shake-img");
            }, random);
        } else {
            console.log({
                status: this.status,
                text: this.statusText,
            });
        }
    };
}
