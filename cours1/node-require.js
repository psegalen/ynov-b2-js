const axios = require("axios");

const postId = process.argv[2];

axios
  .get("https://jsonplaceholder.typicode.com/posts/" + postId)
  .then(resultat => console.log(resultat.data))
  .catch(error => console.error(error.message));

// Lire le premier paramètre passé à la commande node
console.log(process.argv[2]);
