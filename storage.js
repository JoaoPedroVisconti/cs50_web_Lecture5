if (!localStorage.getItem('counter'))
    localStorage.setItem('counter', 0)


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#counter').innerHTML = localStorage.getItem('counter');

    // Count every time button is clicked
    document.querySelector('button').onclick = () => {

        // increment current counter
        let counter = localStorage.getItem('counter');
        counter++

        // Update counter
        document.querySelector('#counter').innerHTML = counter;
        localStorage.setItem('counter', counter);

    }


});

let counter = 0;

function count() {
    counter++;
    document.querySelector('#counter').innerHTML = counter;
}