const throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.js-form'),
  emailInput: document.querySelector('.js-form-email'),
  messageInput: document.querySelector('.js-form-message'),
};

const data = JSON.parse(localStorage.getItem('feedback-form-state')) || {
  email: '',
  message: '',
};

const saveFormData = e => {
  if (e.target.name === 'email') {
    data.email = e.target.value;
  }

  if (e.target.name === 'message') {
    data.message = e.target.value;
  }

  const formData = JSON.stringify(data);
  localStorage.setItem('feedback-form-state', formData);
};

const onSaveDataInput = throttle(saveFormData, 500);

const onFillFormLoad = ({ email, message }) => {
  refs.emailInput.value = email;
  refs.messageInput.value = message;
};

const cleanForm = () => {
  refs.emailInput.value = '';
  refs.messageInput.value = '';
};

window.addEventListener('load', onFillFormLoad(data));

refs.form.addEventListener('input', onSaveDataInput);

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(data);
  localStorage.clear();
  cleanForm();
});
