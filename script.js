const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    search.classList.toggle('active') /*toggle add and remove the class active */
    input.focus() /*it adds on the search input bar the line to prompt you to type somenthing */
})