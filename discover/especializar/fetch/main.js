const url = "http://localhost:5500/api";

function getUsers() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => (renderApiResults.textContent = JSON.stringify(data)))
        .catch((error) => console.error(error));
}

function getUserById() {
    fetch(`${url}/1`)
        .then((res) => res.json())
        .then((data) => {
            // data / data.avatar / data.city
            userName.textContent = data.name;
            userCity.textContent = data.city;
            userAvatar.src = data.avatar;
        })
        .catch((e) => console.error(e));
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((res) => res.json())
        .then((data) => (alertApi.textContent = data))
        .catch((e) => console.error(e));
}

const newUser = {
    name: "Maria Joana",
    avatar: "https://source.unsplash.com/random",
    city: "São Paulo",
};

addUser(newUser);
getUserById();
getUsers();
