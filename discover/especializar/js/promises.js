import axios from "axios";

Promise.all([
  axios.get('https://api.github.com/users/guisofiati'),
  axios.get('https://api.github.com/users/guisofiati/repos')
])
.then(responses => {
  console.log(responses[0].data.login)
  console.log(responses[1].data.length)
})
.catch(errors => console.log(errors.message));