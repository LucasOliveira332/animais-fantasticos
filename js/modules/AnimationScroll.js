export default class AnimationScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.viewSection = this.viewSection.bind(this);
  }
  viewSection() {
    console.log("test");
    const halfWindon = window.innerHeight * 0.6;
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - halfWindon < 0;
      isSectionVisible
        ? section.classList.add("active")
        : section.classList.remove("active");
    });
  }
  init() {
    this.sections[0].classList.add("active");
    window.addEventListener("scroll", this.viewSection);
  }
}
