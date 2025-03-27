'use strict';
const $form2 = document.querySelector('#contact-form');
$form2.addEventListener('submit', (event) => {
  event?.preventDefault();
  const $formElements = $form2.elements;
  const formObject = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('form submitted:', formObject);
});
