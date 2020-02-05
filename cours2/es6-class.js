class Animal {
  constructor(nbPattes, cri) {
    this.nbPattes = nbPattes;
    this.cri = cri;
  }

  crier() {
    console.log(this.cri);
  }
  avancer() {
    const pattes = Array(this.nbPattes + 1);
    console.log(pattes.join("."));
  }
}

class Chien extends Animal {
  constructor(nom) {
    super(4, "Ouaf !");
    this.nom = nom;
  }

  crier() {
    console.log(`${this.nom} dit "${this.cri}"`);
  }
}

class Humain extends Animal {
  constructor(nom) {
    super(2, "Aaaaaaaaaah !");
    this.nom = nom;
  }

  crier() {
    console.log(`${this.nom} dit "${this.cri}"`);
  }
}

const medor = new Chien("Médor");
medor.crier();
medor.avancer();

const mDurand = new Humain("M. Durand");
mDurand.crier();
mDurand.avancer();

console.log(mDurand);
