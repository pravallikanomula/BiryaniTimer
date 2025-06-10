function format(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  }
  
  let remaining = parseInt(localStorage.getItem('timer-duration'), 10);
  const item = localStorage.getItem('timer-item');
  document.getElementById('title').textContent = `Cooking ${item}...`;
  
  const countdown = document.getElementById('countdown');
  countdown.textContent = format(remaining);

  const alarm = new Audio('alarm.mp3');  // Make sure this file exists in the same folder

  
  const interval = setInterval(() => {
    remaining--;
    countdown.textContent = format(remaining);
    if (remaining <= 0) {
        clearInterval(interval);
        window.location.href = 'done.html';
    }
      
  }, 1000);
  