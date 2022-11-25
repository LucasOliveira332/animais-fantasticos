import outsideClick from "./outsideClick.js";

export default function showDropDownMenu() {
  const dropDown = document.querySelector("[data-dropDown]");
  const eventList = ["touchstart", "click"];
  outsideClick(dropDown, eventList);
}
