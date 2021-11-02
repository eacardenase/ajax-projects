import presentDrinks from "./src/presentDrinks.js";
import "./src/searchForm.js";

const SERVICE_ENDPOINT =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m";

window.addEventListener("DOMContentLoaded", () => {
    presentDrinks(SERVICE_ENDPOINT);
});
