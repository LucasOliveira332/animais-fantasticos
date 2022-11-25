import * as navigation from "../utils/urls.js";

export default function model() {
  const close = document.querySelector('[data-model = "close"]');
  const container = document.querySelector('[data-model="container"]');
  const form = document.querySelector('[data-model = "form"]');
  const openModel = document.querySelector('[data-model = "openModel"]');

  openModel.addEventListener("click", function (e) {
    e.preventDefault();
    container.style.display = "flex";
  });

  close.addEventListener("click", function (e) {
    container.style.display = "none";
  });

  container.addEventListener("click", function (e) {
    if (e.target === container) this.style.display = "none";
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = navigation.urls.home;
    close.click();
  });
}
