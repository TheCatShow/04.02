const btn = document.querySelector('button');
const btn2 = document.querySelector('button');
const btn3 = document.querySelector('button');
const btn4 = document.querySelector('button');
let input = document.querySelector('input');
let myForm = document.forms.myForm;
let elements = myForm.elements;
let block = document.querySelector('#block');
let text = document.querySelector('#text');

btn.addEventListener('click', function (event) {
    event.preventDefault();
    text.append(input.value);
})

// Дан инпут и абзац. При клике на кнопку запишите значение инпута в конец текста абзаца.

btn2.addEventListener('click', function (event) {
    event.preventDefault();
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
    sumOutput.append(sum);
})


// Дан инпут. В него вводится число. При клике на кнопку найдите сумму цифр этого числа.

btn3.addEventListener('click', function (event) {
    event.preventDefault();
    username.textContent = myForm.elements.username.value;
    surname.textContent = myForm.elements.surname.value;
    secondName.textContent = myForm.elements.secondName.value;
})

// В инпут вводится ФИО через пробел. При клике на кнопку запишите фамилию, имя и отчество в анкету.
btn4.addEventListener('click', function (event) {
    event.preventDefault();
})

// Дан инпут. В него вводится текст. При клике на кнопку узнайте количество слов в этом тексте.



