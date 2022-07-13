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

getUserById();
getUsers();
