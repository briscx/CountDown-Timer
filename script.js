const weekEl = document.getElementById("week")
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const birthDay = "18 Jun 2024";

function countdown() {
    const birthDayDate = new Date(birthDay);
    const currentDate = new Date();

    const totalSeconds = (birthDayDate - currentDate) / 1000;

    const week = Math.floor(totalSeconds / 3600 / 24 / 7);
    const days = Math.floor(totalSeconds / 3600/ 24) % 7;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    weekEl.innerHTML = week;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);