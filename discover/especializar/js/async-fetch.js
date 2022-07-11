// fetch('https://api.github.com/users/guisofiati')
// .then(response => response.json())
// .then(data => fetch(data.repos_url))
// .then(res => res.json())
// .then(reposData => console.log(reposData))
// .catch(erro => console.log(erro))

// bom
// import axios from "axios";
// async function start() {
//   try {
//     const response = await fetch("https://api.github.com/users/guisofiati");
//     const user = await response.json();
//     const reposUser = await fetch(user.repos_url);
//     const repos = await reposUser.json();
//     console.log(repos);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("fim");
//   }
// }

// start();

// muito bom
import axios from "axios";
async function start() {
  try {
    const API_URL = "https://api.github.com/users/guisofiati";
    const user = await fetch(API_URL).then((res) => res.json());
    const repos = await fetch(user.repos_url).then((res) => res.json());
    console.log(repos);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("fim");
  }
}

start();
