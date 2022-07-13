const url = "http://localhost:5500/api";

function getUsers() {
    axios.get(url).then((res) => {
        // sem passar o JSON.stringify ele mostra apenas o tipo do objeto res
        // retorna um texto simples
        apiResult.textContent = JSON.stringify(res.data);
    });
}

getUsers();
