const throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.js-form'),
  emailInput: document.querySelector('.js-form-email'),
  messageInput: document.querySelector('.js-form-message'),
};

let data = JSON.parse(localStorage.getItem('feedback-form-state')) || {
  email: '',
  message: '',
};

const handleChange = e => {
  const { name, value } = e.target;
  data[name] = value;
  const formData = JSON.stringify(data);
  localStorage.setItem('feedback-form-state', formData);
};

const onFormSubmit = e => {
  e.preventDefault();
  console.log(data);
  localStorage.clear();
  data = { email: '', message: '' };
  e.target.reset();
};

const handleChangeInput = throttle(handleChange, 500);

const onFillFormLoad = ({ email, message }) => {
  refs.emailInput.value = email;
  refs.messageInput.value = message;
};

window.addEventListener('load', onFillFormLoad(data));

refs.form.addEventListener('input', handleChangeInput);

refs.form.addEventListener('submit', onFormSubmit);
