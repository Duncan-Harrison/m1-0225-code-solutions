const $countdown = document.querySelector('.countdown-display');
if (!$countdown) throw new Error('$countdown query failed');

let count: number = 4;
const majorTom = setInterval(function () {
  count--;
  if (count >= 1) {
    $countdown.textContent = count.toString();
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(majorTom);
  }
}, 2000);
