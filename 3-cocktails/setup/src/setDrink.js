const setDrink = (section) => {
    section.addEventListener("click", (event) => {
        // event.preventDefault();
        const drinkID = event.target.parentElement.dataset.id;
        localStorage.setItem("drink", drinkID);
    });
};

export default setDrink;
