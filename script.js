const formBtn = document.getElementById('form-btn');
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');

formBtn.addEventListener('click', (event) => {

    event.preventDefault();
    if (inputEmail.value.trim() === '') {
      inputEmail.style.animation = 'shake .5s';
    }
    if (inputName.value.trim() === '') {
      inputName.style.animation = 'shake .5s';
    }
    
    setTimeout(() => {
      inputEmail.style.animation = 'none';
      inputName.style.animation = 'none';
    }, 500);
});


const arrowDown = document.getElementById('icon-down');
const containers = document.getElementById('containers');
arrowDown.addEventListener('click', () => {
  containers.scrollIntoView({ behavior: 'smooth' });
});