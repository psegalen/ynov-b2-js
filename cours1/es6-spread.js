function clonerEtEtendreObjet(objet) {
  return Object.assign({}, objet, { age: 45 });
}
function clonerEtEtendreObjetSpread(objet) {
  return { ...objet, age: 35 };
}

var objetClone = clonerEtEtendreObjet({ prenom: "Mario" });
console.log(objetClone);
objetClone = clonerEtEtendreObjetSpread({ prenom: "Luigi" });
console.log(objetClone);
