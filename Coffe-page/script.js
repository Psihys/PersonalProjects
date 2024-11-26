function imgSlider(anything){   document.querySelector('.starbucks').src = anything; }

const greenCoffee = document.getElementById('green-coffee');
const pinkCoffee = document.getElementById('pink-coffee');
const purpleCoffee = document.getElementById('purple-coffee');

function changeSpanColor(color) {
    // Select the span element inside the h2 tag in the .text-box
    const spanElement = document.querySelector('.container .text-box h2 span');
    
    // Change the color of the span element
    spanElement.style.color = color;
}

function changeHrefColor(color) {

    const hrefElement = document.querySelector('.container .text-box a');

    hrefElement.style.backgroundColor = color;
}

function changeBackgroundColor(color) {

    const bgElement = document.querySelector('.circle');

    bgElement.style.backgroundColor = color;
}
greenCoffee.addEventListener('click', () => {
    changeSpanColor('green');
    changeHrefColor('green');
    changeBackgroundColor('green');
});

pinkCoffee.addEventListener('click', () => {
    changeSpanColor('pink');
    changeHrefColor('pink');
    changeBackgroundColor('pink');
});

purpleCoffee.addEventListener('click', () => {
    changeSpanColor('rgb(218,112,214)');
    changeHrefColor('rgb(218,112,214)');
    changeBackgroundColor('rgb(218,112,214)');
});