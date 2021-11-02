import fetchDrinks from "./src/fetchDrinks.js";
import displaySingleDrink from "./src/displaySingleDrink.js";

const baseURLByID = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const presentSingleDrink = async () => {
    const drinkID = localStorage.getItem("drink");
    // if by mistake there is no id stored in the browser
    // the user will be redirected to the index
    if (!drinkID) {
        window.location.replace("index.html");
    } else {
        const drink = await fetchDrinks(`${baseURLByID}${drinkID}`);
        displaySingleDrink(drink);
    }
};

window.addEventListener("DOMContentLoaded", presentSingleDrink);
