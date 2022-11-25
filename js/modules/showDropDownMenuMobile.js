import outsideClick from "./outsideClick.js";

export default function showDropDownMenu() {
  const dropDown = document.querySelector("[data-menuMobile]");
  const eventList = ["touchstart", "click"];
  outsideClick(dropDown, eventList);
}
