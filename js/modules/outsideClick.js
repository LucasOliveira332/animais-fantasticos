export default function outsideClick(element, eventList) {
  const html = document.documentElement;

  eventList.forEach((event) => {
    element.addEventListener(event, handleClickInside);
  });
  function handleClickInside(e) {
    e.preventDefault();
    element.classList.add("active");
    eventList.forEach((event) => {
      html.addEventListener(event, handleClickOutside);
    });
  }
  function handleClickOutside(event) {
    if (!element.parentElement.contains(event.target)) {
      element.classList.remove("active");
      eventList.forEach((event) =>
        html.removeEventListener(event, handleClickOutside)
      );
    }
  }
}
