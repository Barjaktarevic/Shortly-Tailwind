const input = document.querySelector('[data-input]')
const form = document.querySelector('[data-form]')
const error = document.querySelector('[data-error]')

const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

form.addEventListener('submit', formSubmit)

function isValidURL(string) 
        {
            var res = 
            string.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi);
        return (res !== null);
        };

function formSubmit(e) {
    e.preventDefault()
    if(input.value === '') {
        error.textContent = 'Please include a link'
        input.classList.add('border-red')
    } else if(!isValidURL(input.value)) {
        error.textContent = 'Please enter a valid URL'
        input.classList.add('border-red')
    } else {
        error.textContent = ''
        input.classList.remove('border-red')
    }
}

btn.addEventListener('click', navToggle)

function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}