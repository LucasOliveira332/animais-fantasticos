export default function initTabNav() {
  const gallery = document.querySelectorAll("[data-main='gallery'] li");
  const description = document.querySelectorAll(
    "[data-main='description'] section"
  );

  description[0].classList.add("active");

  gallery.forEach((img, index) => {
    img.addEventListener("click", function (e) {
      description.forEach((section) => {
        section.classList.remove("active");
      });
      description[index].classList.add("active");
    });
  });
}
