let clickCount: number = 0;
const $screen = document.querySelector('.screen');
const $bulb = document.querySelector('.bulb');

if (!$screen) throw new Error('The $screen query has failed.');
if (!$bulb) throw new Error('The $bulb query has failed.');

$bulb.addEventListener('click', (event: Event) => {
  const $target = event.target;
  console.log('target: ', $target);
  clickCount++;
  if (clickCount % 2 === 0) {
    $screen.className = 'screen on';
    $bulb.className = 'bulb on';
  } else {
    $screen.className = 'screen off';
    $bulb.className = 'bulb off';
  }
});
