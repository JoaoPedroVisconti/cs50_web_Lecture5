// The document (the webpage) has an event call DOMContentLoaded
// when the content of the webpage (DOM) is done beeing loaded by the web browser

// The function inside the event is call the callback function. When the 
// laod finishes it gonna call the callback function

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').onclick = count;
});


let counter = 0;

function count() {
    counter++;
    document.querySelector('#counter').innerHTML = counter;

    if (counter % 10 === 0) {
        alert(`Counter is at ${counter}`);
    }
}