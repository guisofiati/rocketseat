const button = document.querySelector('button');
const div = document.querySelector('div');

button.addEventListener('click', function() {
    console.log('mouse click');
    div.removeAttribute('hidden');
});

document.addEventListener('keyup', function(event) {
    console.log(event.key);
    if (event.key == 'Escape') {
        div.setAttribute('hidden', true);
    }
});