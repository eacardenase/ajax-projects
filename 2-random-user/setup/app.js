import getElement from "./utils/getElement.js";
import getUser from "./utils/getUser.js";
import displayUser from "./utils/displayUser.js";

const URL = "https://randomuser.me/api/?gender=female";

const btn = getElement(".btn");

const showUser = async () => {
    // get user data from API
    const person = await getUser(URL);

    // display user info
    displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
