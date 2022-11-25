export default function inOperationOrNot() {
  const status = document.querySelector('[data-operation="status"]');
  const daysOperation = [1, 2, 3, 4, 5];
  const timeOperation = [8, 18];

  const dateNow = new Date();
  const day = dateNow.getDay();
  const hour = dateNow.getHours();

  const isDayOpen = daysOperation.includes(day);
  const isTimeOpen = hour >= timeOperation[0] && hour <= timeOperation[1];

  isDayOpen && isTimeOpen
    ? (status.style.backgroundColor = "green")
    : (status.style.backgroundColor = "red");
}
