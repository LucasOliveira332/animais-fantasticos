export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const halfWindon = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - halfWindon < 0;
        isSectionVisible
          ? section.classList.add("active")
          : section.classList.remove("active");
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
