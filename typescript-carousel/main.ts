const $selectors = document.querySelector('.selectors');
if (!$selectors) throw new Error('$selectors failed');
const $first = document.getElementById('select1') as HTMLElement;
if (!$first) throw new Error('$first failed');
const $second = document.getElementById('select2') as HTMLElement;
if (!$second) throw new Error('$second failed');
const $third = document.getElementById('select3') as HTMLElement;
if (!$third) throw new Error('$third failed');
const $fourth = document.getElementById('select4') as HTMLElement;
if (!$fourth) throw new Error('$fourth failed');
const $fifth = document.getElementById('select5') as HTMLElement;
if (!$fifth) throw new Error('$first failed');
const $pokemon = document.getElementById('poke') as HTMLImageElement;
if (!$pokemon) throw new Error('$pokemon failed');
const $leftArrow = document.getElementById('left-arrow');
if (!$leftArrow) throw new Error('$leftArrow failed');
const $left = document.getElementById('left');
if (!$left) throw new Error('$left failed');
const $rightArrow = document.getElementById('right-arrow');
if (!$rightArrow) throw new Error('$rightArrow failed');
const $right = document.getElementById('right-arrow');
if (!$right) throw new Error('$rightArrow failed');

function targetClass(el: HTMLElement | null): void {
  if (el === null) {
    throw new Error('className failed');
  } else {
    el.className = 'fa-solid fa-circle';
  }
}

function checkTarget(iD: string): void {
  switch (iD) {
    case 'select1':
      targetClass($first);
      break;
    case 'select2':
      targetClass($second);
      break;
    case 'select3':
      targetClass($third);
      break;
    case 'select4':
      targetClass($fourth);
      break;
    case 'select5':
      targetClass($fifth);
      break;
  }
}

function clearTarget(iD: string): void {
  const arr = [$first, $second, $third, $fourth, $fifth];
  for (const el of arr) {
    if (el == null) {
      break;
    } else if (el.id !== iD) {
      el.className = 'fa-regular fa-circle';
    } else {
      continue;
    }
  }
}

function assignTarget(iD: string): void {
  switch (iD) {
    case 'select1':
      $pokemon.src = './images/025.png';
      break;
    case 'select2':
      $pokemon.src = './images/001.png';
      break;
    case 'select3':
      $pokemon.src = './images/004.png';
      break;
    case 'select4':
      $pokemon.src = './images/007.png';
      break;
    case 'select5':
      $pokemon.src = './images/039.png';
      break;
  }
}

$selectors?.addEventListener('click', (event: Event) => {
  const target = event.target as HTMLElement;
  checkTarget(target?.id);
  clearTarget(target?.id);
  assignTarget(target?.id);
});

$left.addEventListener('click', () => {
  const arr = [$first, $second, $third, $fourth, $fifth];
  const current = arr.find(
    (element) => element.className === 'fa-solid fa-circle'
  );
  if (current?.id === 'select1') {
    $first.className = 'fa-regular fa-circle';
    $fifth.className = 'fa-solid fa-circle';
    $pokemon.src = './images/039.png';
  } else if (current?.id === 'select2') {
    $second.className = 'fa-regular fa-circle';
    $first.className = 'fa-solid fa-circle';
    $pokemon.src = './images/025.png';
  } else if (current?.id === 'select3') {
    $third.className = 'fa-regular fa-circle';
    $second.className = 'fa-solid fa-circle';
    $pokemon.src = './images/001.png';
  } else if (current?.id === 'select4') {
    $fourth.className = 'fa-regular fa-circle';
    $third.className = 'fa-solid fa-circle';
    $pokemon.src = './images/004.png';
  } else if (current?.id === 'select5') {
    $fifth.className = 'fa-regular fa-circle';
    $fourth.className = 'fa-solid fa-circle';
    $pokemon.src = './images/007.png';
  }
});

$right.addEventListener('click', () => {
  const arr = [$first, $second, $third, $fourth, $fifth];
  const current = arr.find(
    (element) => element.className === 'fa-solid fa-circle'
  );
  if (current?.id === 'select1') {
    $first.className = 'fa-regular fa-circle';
    $second.className = 'fa-solid fa-circle';
    $pokemon.src = './images/001.png';
  } else if (current?.id === 'select2') {
    $second.className = 'fa-regular fa-circle';
    $third.className = 'fa-solid fa-circle';
    $pokemon.src = './images/004.png';
  } else if (current?.id === 'select3') {
    $third.className = 'fa-regular fa-circle';
    $fourth.className = 'fa-solid fa-circle';
    $pokemon.src = './images/007.png';
  } else if (current?.id === 'select4') {
    $fourth.className = 'fa-regular fa-circle';
    $fifth.className = 'fa-solid fa-circle';
    $pokemon.src = './images/039.png';
  } else if (current?.id === 'select5') {
    $fifth.className = 'fa-regular fa-circle';
    $first.className = 'fa-solid fa-circle';
    $pokemon.src = './images/025.png';
  }
});

setInterval(function () {
  const arr: HTMLElement[] = [$first, $second, $third, $fourth, $fifth];
  const current = arr.find(
    (element) => element?.className === 'fa-solid fa-circle'
  );
  if (current?.id === 'select1') {
    $first.className = 'fa-regular fa-circle';
    $second.className = 'fa-solid fa-circle';
    $pokemon.src = './images/001.png';
  } else if (current?.id === 'select2') {
    $second.className = 'fa-regular fa-circle';
    $third.className = 'fa-solid fa-circle';
    $pokemon.src = './images/004.png';
  } else if (current?.id === 'select3') {
    $third.className = 'fa-regular fa-circle';
    $fourth.className = 'fa-solid fa-circle';
    $pokemon.src = './images/007.png';
  } else if (current?.id === 'select4') {
    $fourth.className = 'fa-regular fa-circle';
    $fifth.className = 'fa-solid fa-circle';
    $pokemon.src = './images/039.png';
  } else if (current?.id === 'select5') {
    $fifth.className = 'fa-regular fa-circle';
    $first.className = 'fa-solid fa-circle';
    $pokemon.src = './images/025.png';
  }
}, 3000);
