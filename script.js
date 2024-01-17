function getDate() {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  document.querySelector(".digital").innerHTML = `${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`
  getPointers(hours, minutes, seconds)
}
function getPointers(hours, minutes, seconds) {
  const sDeg = (360 / 60) * seconds - 90
  const mDeg = (360 / 60) * minutes - 90
  const hDeg = (360 / 12) * hours - 90

  document.querySelector(".p_s").style.transform = `rotate(${sDeg}deg)`
  document.querySelector(".p_m").style.transform = `rotate(${mDeg}deg)`
  document.querySelector(".p_h").style.transform = `rotate(${hDeg}deg)`
}

setInterval(getDate, 1000)
getDate()
