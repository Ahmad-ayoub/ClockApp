function startClock() {
  const date = new Date();
  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  let ampm = "AM";
  let singledigitsec = 0;
  let singledigitmin = 0;

  function AMPM() {
    if (date.getHours > 12) {
      ampm = "PM";
    }
    return ampm;
  }

  function prefixdigitmin() {
    if (minutes > 9) {
      singledigitmin = "";
    }
    return singledigitmin;
  }

  function prefixdigitsec() {
    if (seconds > 9) {
      singledigitsec = "";
    }
    return singledigitsec;
  }

  const Clock = document.getElementById("Clock");

  const currentTime = `${hours}:${prefixdigitmin()}${minutes}:${prefixdigitsec()}${seconds} ${AMPM()}`;

  Clock.textContent = currentTime;
}

function getDate() {
  const date = new Date();
  const dayOfWeek = date.toLocaleString("en-US", { weekday: "long" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();

  function suffix() {
    return dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31
      ? "st"
      : dayOfMonth === 2 || dayOfMonth === 22
      ? "nd"
      : dayOfMonth === 3 || dayOfMonth === 23
      ? "rd"
      : "th";
  }

  const DateID = document.getElementById("date");

  const currentDate = `${dayOfWeek}, ${month} ${dayOfMonth}${suffix()} ${year}`;

  DateID.textContent = currentDate;
}

getDate();
startClock();
setInterval(() => {
  startClock();
  getDate();
}, 1000);
