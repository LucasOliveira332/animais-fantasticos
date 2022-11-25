export default class ScrollPage {
  constructor(internalLinks, scrollIntoViewOptions) {
    this.internalLinks = document.querySelectorAll(internalLinks);
    scrollIntoViewOptions !== undefined
      ? (this.scrollIntoViewOptions = scrollIntoViewOptions)
      : (this.scrollIntoViewOptions = { behavior: "smooth", block: "end" });
    this.ScrollToSection = this.ScrollToSection.bind(this);
  }
  ScrollToSection(event) {
    event.preventDefault();
    const linkActive = event.currentTarget.getAttribute("href");
    const section = document.querySelector(linkActive);
    section.scrollIntoView(this.scrollIntoViewOptions);
  }
  Init() {
    this.internalLinks.forEach((link) => {
      link.addEventListener("click", this.ScrollToSection);
    });
    return this;
  }
}
