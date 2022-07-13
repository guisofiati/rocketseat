const url = "http://localhost:5500/api";

async function getUsers() {
    await fetch(url)
        .then((response) => response.json())
        .then((data) => (renderApiResults.textContent = JSON.stringify(data)))
        .catch((error) => console.error(error));
}

getUsers();
