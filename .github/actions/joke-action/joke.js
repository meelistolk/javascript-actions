const requests = require("request-promise");

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent":
            "Writing Javascript action GitHub Skills course."
    },
    json: true
};

async function getJoke() {
    const res = await requests(options);
    return res.joke;
}

module.exports = getJoke;