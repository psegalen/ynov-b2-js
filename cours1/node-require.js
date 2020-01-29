const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then(resultat => console.log(resultat.data))
  .catch(error => console.error(error.message));

// Lire le premier paramètre passé à la commande node
console.log(process.argv[2]);
