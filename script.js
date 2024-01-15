class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  confrontaEta(altroUtente) {
    if (this.age > altroUtente.age) {
      return `${this.firstName} è più vecchio di ${altroUtente.firstName}`;
    } else if (this.age < altroUtente.age) {
      return `${this.firstName} è più giovane di ${altroUtente.firstName}`;
    } else {
      return `${this.firstName} ha la stessa età di ${altroUtente.firstName}`;
    }
  }
}

// Creazione di oggetti User
const utente1 = new User("Eustass", "Kid", 23, "Orientale");
const utente2 = new User("Chopper", "Filato", 19, "Drum");

// Confronto delle età
const risultatoConfronto = utente1.confrontaEta(utente2);

// Stampa del risultato
console.log(risultatoConfronto);
