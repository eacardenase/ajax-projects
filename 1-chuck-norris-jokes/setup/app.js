const content = document.querySelector(".content");
const button = document.querySelector(".btn");
const url = "https://api.chucknorris.io/jokes/random";

button.addEventListener("click", () => {
    getRandomJoke(url);
});

function getRandomJoke(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const randomJoke = JSON.parse(this.responseText).value;
            content.innerHTML = randomJoke;
        } else {
            console.log({ status: this.status, statusText: this.statusText });
        }
    };
    xhr.send();
}
