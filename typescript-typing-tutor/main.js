'use strict';
const $mavis = document.querySelectorAll('span');
if (!$mavis) throw new Error('The $mavis query was not very beacon.');
const $container = document.querySelector('.container');
if (!$container) throw new Error('The $container query has failed.');
document.addEventListener('keypress', (event) => {
  for (let i = 0; i < $mavis.length; i++) {
    if (event.key === $mavis[i].textContent) {
      $mavis[i].className = 'typed';
    } else if ($mavis[i].className === 'typed') {
      continue;
    } else {
      $mavis[i].className = 'mistyped';
      break;
    }
  }
});
