const durations = {
  onions: 15 * 60,
  rice: 1 * 60,
  chicken: 7 * 60,
  biryani: 20 * 60,
};

function startTimer(item) {
  localStorage.setItem('timer-item', item);
  localStorage.setItem('timer-duration', durations[item]);
  window.location.href = 'timer.html';
}
