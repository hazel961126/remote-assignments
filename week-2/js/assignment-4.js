
const welcome = document.querySelector('h1.welcome');

welcome.addEventListener('click', () => {
    welcome.textContent = 'Have a Good Time!';
})

//Open Menu
const menu = document.querySelector('.menu');
function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('close-btn').style.display = 'block';
}
menu.addEventListener('click', openSlideMenu);

// Close Menu
const close = document.querySelector('#close-btn');
function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0px';
}
close.addEventListener('click', closeSlideMenu);


// Access More Columns
const callToAction = document.querySelector('button');
const columns = document.querySelector('.columns-added');

function addColumns(){
    document.querySelector('.columns-added').style.display = 'flex';
}
callToAction.addEventListener('click', addColumns);

