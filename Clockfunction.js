function startClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  let ampm = "AM";
  let singledigitsec = 0;
  let singledigitmin = 0;

  function AMPM() {
    if (hours > 12) {
      hours = hours - 12;
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
  const dayofmonth = date.getDate();
  const year = date.getFullYear();
  let suf = "st";

  function suffix() {
    if (dayofmonth === 2) {
      suf = "nd";
    }
    if (dayofmonth === 3) {
      suf = "rd";
    } else {
      suf = "th";
    }
    return suf;
  }

  const DateID = document.getElementById("date");

  const currentDate = `${dayOfWeek}, ${month} ${dayofmonth}${suffix()} ${year}`;

  DateID.textContent = currentDate;
}
