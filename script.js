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
    document.querySelector('.menu-btn').setAttribute('class', 'menu-btn open');
}

function closeMenu() {
    document.querySelector('.menu-btn').setAttribute('class', 'menu-btn');
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