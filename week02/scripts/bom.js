const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const deletebtn = document.createElement('button');
        li.textContent = input.value;
        deletebtn.textContent = 'X';
        li.append(deletebtn);
        list.append(li);
        deletebtn.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
            input.value = '';
        });
    }
});

