import getElement from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displaySingleDrink = ({ drinks }) => {
    hideLoading();
    const [singleDrink] = drinks;
    const {
        strInstructions: description,
        strDrink: name,
        strDrinkThumb: image,
    } = singleDrink;
    const ingredientsList = [
        singleDrink.strIngredient1,
        singleDrink.strIngredient2,
        singleDrink.strIngredient3,
        singleDrink.strIngredient4,
        singleDrink.strIngredient5,
        singleDrink.strIngredient6,
        singleDrink.strIngredient7,
        singleDrink.strIngredient8,
        singleDrink.strIngredient9,
        singleDrink.strIngredient10,
        singleDrink.strIngredient11,
        singleDrink.strIngredient12,
        singleDrink.strIngredient13,
        singleDrink.strIngredient14,
        singleDrink.strIngredient15,
    ];
    const drinkIngredients = ingredientsList
        .map((ingredient) => {
            if (!ingredient) {
                return;
            }
            return `
            <li>
            <i class="far fa-check-square"></i>${ingredient}
            </li>
            `;
        })
        .join("");

    document.title = name;

    const section = getElement(".single-drink");
    section.innerHTML = `
    <img src="${image}" alt="${name}cocktail" class="drink-img" />
            <article class="drink-info">
                <h2 class="drink-name">${name}</h2>
                <p class="drink-description">${description}</p>
                <ul class="drink-ingredients">${drinkIngredients}</ul>
                <a href="./index.html" class="btn">all cocktails</a>
    </article>
    `;
};

export default displaySingleDrink;
