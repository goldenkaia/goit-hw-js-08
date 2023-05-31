const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('submit', onSubmit);
formEl.addEventListener('input', onInput);
window.addEventListener('load', onLoad);

let formData = {};
const STORAGE_KEY = 'item';

function onSubmit(e) {
  e.preventDefault();
  e.target.reset();
  console.log(formData);
  formData = {};
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onLoad() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return;
    formData = JSON.parse(data);
    Object.entries(formData).forEach(([key, val]) => {
      formEl.elements[key].value = val;
    });
  } catch (error) {
    console.log(error.message);
  }
}
