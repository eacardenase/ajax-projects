const getElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
        return element;
    } else {
        throw new Error(
            `Please check the ${selector} element. It does not exists.`
        );
    }
};

export default getElement;
