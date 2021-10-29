const content = document.querySelector(".content");
const button = document.querySelector(".btn");
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
            const { value: randomJoke } = JSON.parse(this.responseText);
            content.innerHTML = randomJoke;
        } else {
            console.log({
                status: this.status,
                text: this.statusText,
            });
        }
    };
}
