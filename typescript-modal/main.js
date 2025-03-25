'use strict';
const $openModal = document.querySelector('.open-modal');
if (!$openModal) throw new Error('The $openModal query failed');
const $dismissModal = document.querySelector('.dismiss-modal');
if (!$dismissModal) throw new Error('The $dismissModal query failed');
const $dialog = document.querySelector('dialog');
if (!$dialog) throw new Error('The $dialog query has failed');
$openModal.addEventListener('click', (event) => {
  if (event) {
    $dialog.showModal();
  }
});
$dismissModal.addEventListener('click', (event) => {
  if (event) {
    $dialog.close();
  }
});
