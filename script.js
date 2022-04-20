var counter = 2;

function slideCounter(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
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
}

function previousSlide() {
    if(counter == 1){
        counter = 5;
    }
    else{
        counter--;
    }
    document.getElementById('radio' + counter).checked = true;
}