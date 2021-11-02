import getElement from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = getElement(".search-form");
const inputForm = getElement("[name='drink']");

form.addEventListener("keyup", (event) => {
    event.preventDefault();
    const valueForm = inputForm.value;
    if (valueForm) {
        const newURL = `${baseURL}${valueForm}`;
        presentDrinks(newURL);
    } else {
        return;
    }
});
