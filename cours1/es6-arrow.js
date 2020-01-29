function getBonjourFunction(nom) {
  return "Bonjour " + nom;
}

console.log(getBonjourFunction("le monde !"));

var getBonjourVar = function(nom) {
  return "Bonjour var " + nom;
};

console.log(getBonjourVar("le monde !"));

var getBonjourArrow = nom => {
  return "Bonjour arrow " + nom;
};

console.log(getBonjourArrow("le monde !"));

var getBonjourArrowOptim = nom => "Bonjour arrow optim " + nom;

console.log(getBonjourArrowOptim("le monde !"));

var getBonjourArrowDefaultValue = (nom = "bel inconnu !") =>
  "Bonjour arrow optim " + nom;

console.log(getBonjourArrowDefaultValue());
