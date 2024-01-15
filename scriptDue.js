const createPet = function () {
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);

  updatePetList();
  clearForm();
};

const updatePetList = function () {
  const petListElement = document.getElementById("petList");
  petListElement.innerHTML = "";

  pets.forEach((pet) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Pet: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
    petListElement.appendChild(listItem);
  });
};

const clearForm = function () {
  document.getElementById("petForm").reset();
};

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const pets = [];
