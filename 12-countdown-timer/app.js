const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();
const tempHours = tempDate.getHours();

const futureDate = new Date(tempYear, tempMonth, tempDay + 3, tempHours + 3, 12, 0, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${(hours > 12) ? hours - 12 : hours}:${minutes}${(hours > 12) ? 'pm' : 'am'}`;


const futureTime = futureDate.getTime();
const getRemainingTime = () => {
  const today = new Date().getTime();
  const time = futureTime - today;

  const oneDay = 60 * 60 * 24 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;


  let days = Math.floor(time / oneDay);
  let hours = Math.floor((time % oneDay) / oneHour);
  let minutes = Math.floor((time % oneHour) / oneMinute);
  let seconds = Math.floor((time % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  const format = (item) => {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  };

  items.forEach((item, index) => {
    item.textContent = format(values[index]);
  });

  if (time < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
};

const countdown = setInterval(() => {
  getRemainingTime();
}, 1000);

getRemainingTime();