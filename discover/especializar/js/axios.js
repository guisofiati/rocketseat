import axios from "axios";

// confuso
// axios
//   .get("https://api.github.com/users/guisofiati")
//   .then((response) => {
//     //console.log(response.data)
//     const userData = response.data;
//     axios.get(userData.repos_url)
//     .then(repos => console.log(repos.data))
//     .catch(error => console.log(error))
//   })
//   .catch((error) => console.log(error));

// bom
// import axios from "axios";
// axios
//   .get("https://api.github.com/users/guisofiati")
//   .then((response) => {
//     //console.log(response.data)
//     const userData = response.data;
//     return axios.get(userData.repos_url)
//   })
//   .then(repos => console.log(repos.data))
//   .catch((error) => console.log(error));

// melhor
import axios from "axios";

axios
  .get("https://api.github.com/users/guisofiati")
  .then(response => axios.get(response.data.repos_url))
  .then(repos => console.log(repos.data))
  .catch(error => console.log(error));