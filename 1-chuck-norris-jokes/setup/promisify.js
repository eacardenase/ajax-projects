const content = document.querySelector(".content");
const button = document.querySelector(".btn");
const img = document.querySelector(".container img");
const URL = "https://api.chucknorris.io/jokes/random";

button.addEventListener("click", () => {
    getData(URL)
        .then((response) => displayData(response))
        .catch((error) => console.log(error));
});

function getData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return;
            if (this.status === 200) {
                resolve(this.responseText);
            } else {
                reject({
                    status: this.status,
                    text: this.statusText,
                });
            }
        };
    });
}

function displayData(data) {
    // shake image
    img.classList.add("shake-img");
    const { value: randomJoke } = JSON.parse(data);
    content.innerHTML = randomJoke;
    // setting the time randomly
    const random = Math.floor(Math.random() * 1000);
    setTimeout(() => {
        img.classList.remove("shake-img");
    }, random);
}
