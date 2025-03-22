'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('The $taskList query failed');
$taskList?.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  console.log($eventTarget);
  console.log($eventTarget.tagName);
  if ($eventTarget.tagName === 'BUTTON') {
    const $close = $eventTarget.closest('.task-list-item');
    console.log($close);
    $close?.remove();
  }
});
