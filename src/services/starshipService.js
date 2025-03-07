const BASE_URL = "https://swapi.info/api/starships";

const index = async () => {
    try {
        const res = await fetch(BASE_URL);
        if (!res.ok) {
            throw new Error('Failed to fetch starships.');
        };
        const data = await res.json();
        console.log('Data:', data);
        return data;
    } catch {
        console.log(err);
    };
};

export { index };