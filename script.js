var counter = 1;

function slideCounter(){
    counter++;
    if(counter > 5){
        counter = 1;
    }
    document.getElementById('radio' + counter).checked = true;
}

var timer = setInterval(slideCounter, 10000);

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(slideCounter, 10000);
}

function nextSlide() {
    if(counter == 5){
        counter = 1;
    }
    else{
        counter++;
    }
    document.getElementById('radio' + counter).checked = true;
    resetTimer();
}

function previousSlide() {
    if(counter == 1){
        counter = 5;
    }
    else{
        counter--;
    }
    document.getElementById('radio' + counter).checked = true;
    resetTimer();
}

var menuOpen = false;

function openMenu() {
    document.querySelector('.menu-btn').classList.add('open');
    document.querySelector('nav ul').classList.add('show');
}

function closeMenu() {
    document.querySelector('.menu-btn').classList.remove('open');
    document.querySelector('nav ul').classList.remove('show');
}

function menu() {
    if (menuOpen) {
        closeMenu();
        menuOpen = false;
    } else {
        openMenu();
        menuOpen = true;
    }
}

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 500;

        if (document.querySelector('.vertical-line').getBoundingClientRect().top < revealPoint) {
            document.querySelector('.vertical-line').style.opacity = 1;
        } else {
            document.querySelector('.vertical-line').style.opacity = 0;
        }

        if (revealTop < revealPoint) {
            reveals[i].classList.add('act');
        } else {
            reveals[i].classList.remove('act');
        }
    }
}