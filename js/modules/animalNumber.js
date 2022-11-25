export default function animalNumber() {
  const animalNumbers = document.querySelectorAll("[data-animalNumber='item']");
  const section = document.querySelector("[data-animalNumber='section']");
  section.addEventListener("change", () => {});

  animalNumbers.forEach((number) => {
    let total = +number.innerText;
    let times = total / 100;
    let acu = 0;

    const interval = setInterval(() => {
      number.innerText = Math.ceil(acu);
      acu += times;
      if (acu > total) {
        clearInterval(interval);
        number.innerText = total;
      }
    }, 50 * Math.random());
  });
}
