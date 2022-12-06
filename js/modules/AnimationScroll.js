export default class AnimationScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.viewSection = this.viewSection.bind(this);
    this.halfWindon = window.innerHeight * 0.6;
    this.distance;
  }
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      console.log(section.offsetTop);
      console.log(section.halfWindon);

      return {
        element: section,
        offset: section.offsetTop - this.halfWindon,
      };
    });
  }
  viewSection() {
    this.distance.forEach((distance) => {
      const isSectionVisible = window.scrollY > distance.offset;
      console.log(distance.offset);

      isSectionVisible
        ? distance.element.classList.add("active")
        : distance.element.classList.remove("active");
      if (isSectionVisible) distance.element.classList.add("active");
      else if (distance.element.contains("active"))
        distance.element.classList.remove("active");
    });
  }
  init() {
    this.getDistance();
    this.sections[0].classList.add("active");
    window.addEventListener("scroll", this.viewSection);
  }
}
