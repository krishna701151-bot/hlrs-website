function submitForm(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim()
  };
  if(!data.name || !data.email || !data.message){
    alert('Please fill all fields.');
    return false;
  }
  alert('Thanks, ' + data.name + '! We will get back to you at ' + data.email + '.');
  form.reset();
  return false;
}

document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  const burger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  if (burger && menu) {
    burger.addEventListener('click', () => menu.classList.toggle('open'));
  }
});
