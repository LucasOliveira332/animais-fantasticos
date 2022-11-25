export default function initTooltip() {
  const map = document.querySelector('[data-tooltip="container"]');
  const box = document.querySelector('[data-tooltip="box"]');

  map.addEventListener("mouseover", function (e) {
    box.style.display = "block";
  });

  map.addEventListener("mouseleave", function (e) {
    box.style.display = "none";
  });

  map.addEventListener("mousemove", function (e) {
    box.style.top = e.pageY + 20 + "px";
    box.style.left = e.pageX + 20 + "px";
  });
}
