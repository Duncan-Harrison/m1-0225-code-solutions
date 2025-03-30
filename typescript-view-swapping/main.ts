const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

if (!$tabContainer) throw new Error('The $tabContainer query has failed');
if (!$tab) throw new Error('The $tabContainer query has failed');
if (!$view) throw new Error('The $tabContainer query has failed');

$tabContainer.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLDivElement;
  for (let i = 0; i < $tab.length; i++) {
    if ($eventTarget.matches('.tab')) {
      $eventTarget.className = 'tab active';
      const $targetValue = $eventTarget.getAttribute('data-view');
      for (let a = 0; a < $view.length; a++) {
        const $viewValue = $view[a].getAttribute('data-view');
        if ($viewValue === $targetValue) {
          $view[a].classList.remove('hidden');
        } else {
          $view[a].className = 'view hidden';
        }
      }
    }
    if ($tab[i] !== $eventTarget) {
      $tab[i].classList.remove('active');
    }
  }
});
