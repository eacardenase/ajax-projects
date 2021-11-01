const getUser = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    // destructuring the person info
    const person = data.results[0];
    const { phone, email } = person;
    // photo
    const {
        picture: { large: image },
    } = person;
    // password
    const {
        login: { password },
    } = person;
    const { first, last } = person.name;
    // age
    const {
        dob: { age },
    } = person;
    // street
    const {
        street: { number, name },
    } = person.location;

    return {
        phone,
        email,
        image,
        password,
        name: `${first} ${last}`,
        age,
        street: `${number} ${name}`,
    };
};

export default getUser;
