'use strict';
function handleFocus(event) {
  console.log('The focus event was fired');
  const eventTarget = event?.target;
  console.log(eventTarget.name);
}
function handleBlur(event) {
  console.log('The blur event was fired');
  const eventTarget = event?.target;
  console.log(eventTarget.name);
}
function handleInput(event) {
  const eventTarget = event?.target;
  console.log(eventTarget.name, eventTarget.value);
}
const $formElements = document.querySelector('#contact-form').elements;
/* const $formElements = $form.elements; */
const $formName = $formElements[0];
const $formEMail = $formElements[1];
const $formMessage = $formElements[2];
if (!$formName) throw new Error('The $formName query has failed');
if (!$formEMail) throw new Error('The $formEMail query has failed');
if (!$formMessage) throw new Error('The $formMessage query has failed');
$formName.addEventListener('focus', handleFocus);
$formName.addEventListener('blur', handleBlur);
$formName.addEventListener('input', handleInput);
$formEMail.addEventListener('focus', handleFocus);
$formEMail.addEventListener('blur', handleBlur);
$formEMail.addEventListener('input', handleInput);
$formMessage.addEventListener('focus', handleFocus);
$formMessage.addEventListener('blur', handleBlur);
$formMessage.addEventListener('input', handleInput);
