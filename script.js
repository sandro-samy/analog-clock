const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const setClock = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  hours.style.transform = `rotate(${hour * 30}deg)`;
  minutes.style.transform = `rotate(${minute * 6}deg)`;
  seconds.style.transform = `rotate(${second * 6}deg)`;
};
setClock();
setInterval(setClock, 1000);
