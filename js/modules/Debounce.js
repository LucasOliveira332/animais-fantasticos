export default function Debounce(time, callback) {
  window.addEventListener("scroll", initDebounce);

  let timeOut;

  function initDebounce() {
    if (!timeOut) {
      timeOut = setTimeout(() => {
        callback(), (timeOut = null);
      }, time);
    }
  }
}
