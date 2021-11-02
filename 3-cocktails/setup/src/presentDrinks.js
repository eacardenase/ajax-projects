import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

const showDrinks = async (url) => {
    // fetch drink
    const data = await fetchDrinks(url);

    // display drin
    const section = await displayDrinks(data);
    if (section) {
        setDrink(section);
    }
};

export default showDrinks;
