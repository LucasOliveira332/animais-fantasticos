// @ts-check

export default class ImageDescription {
  /**
   * @param {string} ImgsSelector
   * @param {string} imgsDescriptorSelector
   */
  constructor(ImgsSelector, imgsDescriptorSelector) {
    this.ImgsSelector = document.querySelectorAll(ImgsSelector);
    this.imgsDescriptorSelector = document.querySelectorAll(
      imgsDescriptorSelector
    );
  }
  init() {
    this.imgsDescriptorSelector[0].classList.add("active");
    this.ImgsSelector.forEach((img, index) => {
      img.addEventListener("click", () => {
        this.imgsDescriptorSelector.forEach((description) =>
          description.classList.remove("active")
        );
        this.imgsDescriptorSelector[index].classList.add("active");
      });
    });
  }
}
