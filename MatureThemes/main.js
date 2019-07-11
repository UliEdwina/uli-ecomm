window.onload = init;

function init(){
document.querySelector('.toggle-button')
    .addEventListener ('click', themeToggle)

}

function themeToggle() {
event.preventDefault();

const app = document.querySelector('.app');
const button = event.target;
const headerStars = document.querySelector ('.stars');
const secondTheme = document.querySelector('.box-odd');
const second = document.querySelector('.box-even');
app.classList.toggle('star-life');
button.classList.toggle('star-life');
secondTheme.classList.toggle('box-one-o');
second.classList.toggle('box-two-e');

button.innerText = button.innerText === `Switch To Giant Star`
    ?`Switch To Neutron Star`
    :`Switch To Giant Star`;
headerStars.classList.replace('starsone', 'starstwo');
headerStars.innerText = `Stars Live and Die Just Like People`;



}