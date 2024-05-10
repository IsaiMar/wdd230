const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        // create an li element
        const li = document.createElement('li');

        // create a delete button
        const deletebtn = document.createElement('button');

        // populate the li elements textContent with the input value
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