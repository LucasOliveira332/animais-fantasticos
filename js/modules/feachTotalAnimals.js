import initAnimalNumber from "./animalNumber.js";

export default async function initFeachTotalAnimals() {
  const sectionAnimals = document.querySelector(
    "[data-animalNumber='section'] .content"
  );

  async function feachTotalAnimals() {
    try {
      const response = await fetch("../js/utils/animalsAPI.json");
      return await response.json();
    } catch (error) {}
  }

  const totalNumberAnimalsSpecies = await feachTotalAnimals();
  totalNumberAnimalsSpecies.forEach((animal) => addInHtml(animal));
  initAnimalNumber();
  function addInHtml(animal) {
    const element = document.createElement("div");

    element.innerHTML = `<h2>${animal.specie}</h2><span data-animalNumber='item'>${animal.amount}</span>`;

    sectionAnimals.appendChild(element);
  }
}
