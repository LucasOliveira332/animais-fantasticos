export default class Accordion {
  constructor(questList) {
    this.questList = document.querySelectorAll(questList);
  }
  activeAccordion() {
    console.log(this.nextElementSibling);
    this.nextElementSibling.classList.toggle("active");
  }
  init() {
    this.questList.forEach((quest) => {
      quest.addEventListener("click", this.activeAccordion);
    });
  }
}
