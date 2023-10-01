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
    var close = document.querySelector('.closebtn');
    document.getElementById('main').style.filter = 'blur(5px)';
    document.querySelector('.container').style.display = 'grid';
    document.querySelector('.container').classList.remove('slideBottom');
    document.querySelector('.container').classList.add('slideTop');

    close.addEventListener('click', function () {
        document.getElementById('main').style.filter = 'none';
        document.querySelector('.container').classList.remove('slideTop');
        document.querySelector('.container').classList.add('slideBottom');
        setTimeout(() => {
            document.querySelector('.container').style.display = 'none';
            myDiv.classList.remove('slideBottom');
        }, 500);
    })
}

var check = false;
function ChangeTheme() {
    if (check) {
        root.style.setProperty('--text-dark', '#fff');
        root.style.setProperty('--background-dark', 'rgb(20, 21, 23)')
        root.style.setProperty('--black', '#000');
        root.style.setProperty('--orange', '#0ef');
        root.style.setProperty('--text-grey', '#f7b483');
    } else {
        root.style.setProperty('--text-dark', '#000');
        root.style.setProperty('--background-dark', '#fff')
        root.style.setProperty('--black', '#fff');
        root.style.setProperty('--orange', 'navy');
        root.style.setProperty('--text-grey', 'blue');

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

function VeiwProjects() {
    const close = document.getElementById('btnX');
    const prjct = document.querySelector('.allcards');
    document.getElementById('main').style.filter = 'blur(5px)';
    prjct.style.display = 'flex';
    prjct.classList.remove('slideBottom');
    prjct.classList.add('slideTop');

    close.addEventListener('click', function () {
        document.getElementById('main').style.filter = 'none';
        prjct.classList.remove('slideTop');
        prjct.classList.add('slideBottom');
        prjct.addEventListener('animationend', function () {
            prjct.style.display = 'none';
            prjct.classList.remove('slideBottom');
        }, { once: true });
    });
}


function TypingAnimation() {
    const typedText = document.querySelector('.typed-text');
    const cursor = document.querySelector('.cursor');
    const messages = ["Greetings🙏 Sir/Mam.. Join me on this exciting journey🚀 where I'll be honing my web development skills💻. Together🤝 we'll learn, innovate, and create amazing web projects. Lets embark on this internship adventure and build a bright future in web development! "];
    let currentMessageIndex = 0;
    let currentCharacterIndex = 0;

    function typeMessage() {
        if (currentCharacterIndex < messages[currentMessageIndex].length) {
            typedText.textContent += messages[currentMessageIndex].charAt(currentCharacterIndex);
            currentCharacterIndex++;
            setTimeout(typeMessage, 35);
        } else {
            cursor.style.display = 'none';
        }
    }
    typeMessage();
}

TypingAnimation();