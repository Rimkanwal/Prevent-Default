const form = document.querySelector('#shelter');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const catName = input.value;
    const newLI = document.createElement('LI');
    newLI.innerText = catName;
    list.append(newLI);
    input.value = '';
})


// take the input value and make li

