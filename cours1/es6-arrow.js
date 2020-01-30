function getBonjourFunction(nom) {
  return "Bonjour " + nom;
}

console.log(getBonjourFunction("le monde !"));

const getBonjourConst = function(nom) {
  return "Bonjour const " + nom;
};

console.log(getBonjourConst("le monde !"));

const getBonjourArrow = nom => {
  return "Bonjour arrow " + nom;
};

console.log(getBonjourArrow("le monde !"));

const getBonjourArrowOptim = nom => "Bonjour arrow optim " + nom;

console.log(getBonjourArrowOptim("le monde !"));

const getBonjourArrowDefaultValue = (nom = "bel inconnu !") =>
  "Bonjour arrow optim " + nom;

console.log(getBonjourArrowDefaultValue());
