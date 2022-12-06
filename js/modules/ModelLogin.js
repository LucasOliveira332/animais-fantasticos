import * as navigation from "../utils/urls.js";

export default class ModelLogin {
  constructor(modelBackground, form, OpenModel, CloseButton) {
    this.modelBackground = document.querySelector(modelBackground);
    this.form = document.querySelector(form);
    this.OpenModel = document.querySelector(OpenModel);
    this.CloseButton = document.querySelector(CloseButton);
  }

  clickAway() {
    this.modelBackground.addEventListener("click", function (e) {
      if (e.target === modelBackground) this.style.display = "none";
    });
  }

  openModel() {
    this.OpenModel.addEventListener("click", function (e) {
      this.modelBackground.display = "flex";
    });
  }

  closeForm() {
    this.CloseButton.addEventListener("click", function (e) {
      this.modelBackground.style.display = "none";
    });
  }

  formSubmit() {
    this.form.addEventListener("submit", function (e) {
      e.preventDefault();
      window.location.href = navigation.urls.home;
      CloseForm();
    });
  }

  init() {
    this.clickAway();
    this.openModel();
    this.closeForm();
    this.formSubmit();
    return this;
  }
}
