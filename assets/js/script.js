document.addEventListener("DOMContentLoaded", function () {
    var typed = new typed(".text", {
        strings: ["Gamer", "Coder", "Youtuber"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

})


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
const dwncv = document.getElementById('btn1');
const opencv = document.getElementById('btn2');
const img = document.getElementById('imghldr');
const hello = document.getElementById('XYS');
const allElements = document.querySelectorAll('*');
const body = document.body;
const elementsToToggle = document.querySelectorAll('.theme-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const social = document.querySelectorAll('.bx');
const blingButton = document.getElementById('bling');
const resume = document.getElementById('resume');
const root = document.documentElement;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function update(e) {
    var x = e.clientX || e.touches[0].clientX;
    var y = e.clientY || e.touches[0].clientY;

    document.documentElement.style.setProperty('--cursorX', x + 'px');
    document.documentElement.style.setProperty('--cursorY', y + 'px');
}

document.addEventListener('mousemove', update);
document.addEventListener('touchmove', update);

blingButton.addEventListener('click', function () {
    document.documentElement.classList.toggle('cursor-animation-enabled');
});


function VeiwResume() {
    document.getElementById('main').style.filter = 'blur(5px)';
    document.getElementById('resume').style.display = 'block';
}

var check = false;
function ChangeTheme() {
    if (check) {
        root.style.setProperty('--text-dark', '#fff');
        root.style.setProperty('--background-dark', 'rgb(20, 21, 23)')
        root.style.setProperty('--black', '#000');
    } else {
        root.style.setProperty('--text-dark', '#000');
        root.style.setProperty('--background-dark', '#fff')
        root.style.setProperty('--black', '#fff');

    }
    check = !check;
}

function ButtonHover() {
    const dwncv = document.getElementById("btn1");
    dwncv.addEventListener('mouseover', function () {
        dwncv.style.backgroundColor = 'var(--background-dark)'
        dwncv.style.color = 'var(--text-dark)'
        opencv.style.backgroundColor = 'var(--text-dark)';
        opencv.style.color = 'var(--background-dark)';
    });

    dwncv.addEventListener('mouseout', function () {
        dwncv.style.backgroundColor = ''
        dwncv.style.color = ''
        opencv.style.backgroundColor = '';
        opencv.style.color = '';
        opencv.style.borderColor = '';
    });
}

ButtonHover();
