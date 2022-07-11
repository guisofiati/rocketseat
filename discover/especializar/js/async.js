import axios from "axios";

//async/await - 'forma mais elegante de fazer as promises'

const promessa = new Promise(function (resolve, reject) {
  return resolve("sucesso");
});

async function start() {
  // espera pelo resultado da promessa
  try {
    const result = await promessa;
    console.log(result);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("rodara sempre");
  }
}

start();

//promessa
//.then(function(response) {
//  console.log(response)
//})
//.catch(function(error) {
// console.log(error)
//})
//.finally(function() {
//  console.log('sempre vai ser executado');
//})
