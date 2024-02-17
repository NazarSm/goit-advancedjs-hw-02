import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const DEFAULT_TIME = '00';

const startBtn = document.querySelector('[data-start]');
const dateTime = document.getElementById('datetime-picker');

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

startBtn.disabled = true;

const onClose = (selectedDates) => {
  const selectedTime = selectedDates[0].getTime();
  const currentTime = new Date().getTime();

  if (currentTime > selectedTime) {
    window.alert('Please choose a date in the future')
    return;
  }

  startBtn.disabled = false;
  finishedAt = selectedTime;
}

flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose,
});

let finishedAt = 0;
let timerId = null;

const onStart = () => {
  dateTime.disabled = true;
  startBtn.disabled = true;

  timerId = setInterval(() => {
    const currentTime = new Date().getTime();
    const interval = finishedAt - currentTime;

    if (0 > interval) {
      clearInterval(timerId);

      dateTime.disabled = false;

      days.textContent = DEFAULT_TIME;
      hours.textContent = DEFAULT_TIME;
      minutes.textContent = DEFAULT_TIME;
      seconds.textContent = DEFAULT_TIME;

      return;
    }

    const {
      days: daysValue,
      hours: hoursValue,
      minutes: minutesValue,
      seconds: secondsValue,
    } = convertMs(interval);

    days.textContent = padNumberWithZero(daysValue);
    hours.textContent = padNumberWithZero(hoursValue);
    minutes.textContent = padNumberWithZero(minutesValue);
    seconds.textContent = padNumberWithZero(secondsValue);
  }, 1000);
}

const padNumberWithZero = (value) => {
  if (typeof value !== "number" || isNaN(value)) {
    return "00";
  }
  return value.toString().padStart(2, "0");
}

const convertMs = (ms) => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startBtn.addEventListener('click', onStart);