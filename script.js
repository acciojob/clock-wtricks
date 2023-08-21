//your JS code here. If required.
function formatAMPM(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;

  return `${formattedHours}:${(minutes < 10 ? '0' : '') + minutes}:${(seconds < 10 ? '0' : '') + seconds} ${ampm}`;
}

function updateDateDisplay() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}, ${formatAMPM(currentDate)}`;
  document.getElementById('timer').textContent = formattedDate;
}

// Update the date display every second (1000 milliseconds)
setInterval(updateDateDisplay, 1000);
