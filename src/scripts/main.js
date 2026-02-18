'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.classList = 'field-label';
  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = input.getAttribute('name');

  input.before(label);

  const wordsPlaceholder = input.getAttribute('name');

  input.setAttribute(
    'placeholder',
    wordsPlaceholder[0].toUpperCase() + wordsPlaceholder.slice(1),
  );
}
