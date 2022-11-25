export default function customValidation() {
  const form = document.querySelector("[data-model='form']");

  form.addEventListener("change", modifyForm);

  function modifyForm(event) {
    console.log(event.target.checkValidity());
    if (!event.target.checkValidity())
      console.log(event.target.validationMessage);
    console.log(event.target.value);

    form.style.backgroundColor = event.target.value;
  }
}
