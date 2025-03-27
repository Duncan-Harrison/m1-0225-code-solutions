const $form2 = document.querySelector('#contact-form') as HTMLFormElement;
interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLInputElement;
}

$form2.addEventListener('submit', (event: Event) => {
  event?.preventDefault();
  const $formElements = $form2.elements as FormElements;
  const formObject = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('form submitted:', formObject);
});
