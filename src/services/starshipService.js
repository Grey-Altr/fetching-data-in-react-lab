const BASE_URL = "https://swapi.info/api/starships";

const show = async (starship) => {
    fetch("https://swapi.info/api/starships")
        .then((res) => res.json()) // Parse the JSON content from the API to be consumed
        .then((json) => console.log(json)) // Log the JSON response to your console
        .catch((error) => console.error(error)); // Log the API error (if any) to your console
};

export { show };