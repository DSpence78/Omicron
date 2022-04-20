var counter = 1;

function slideCounter(){
    counter++;
    document.getElementById('radio' + counter).checked = true;
    if(counter > 5){
        counter = 1;
    }
}

var timer = setInterval(slideCounter, 5000);

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(slideCounter, 5000);
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