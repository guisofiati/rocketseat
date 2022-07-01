const button = document.querySelector('button');
const div = document.querySelector('div');

div.style.color = '#fff';

button.addEventListener('click', addDiv);

document.addEventListener('keyup', function(event) {
    if (event.key == 'Escape') {
     removeDiv();
    }
  });

function addDiv() {
    div.style.color = '#000';
    button.disabled = true;
}

function removeDiv() {
    div.style.color = '#fff';
    button.disabled = false;
}