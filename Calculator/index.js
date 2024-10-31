const display = document.getElementById('display');
const numbers = document.getElementById('numbers');
const buttons = document.getElementsByClassName('button')

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonText = event.target.innerText;
    if (buttonText === 'Del') {
      // Remove the last character from the display
      display.innerText = display.innerText.slice(0, -1)
    } else if (buttonText === 'C') {
      // Clear the display
      display.innerText = ''
    } else if(buttonText === '='){
        display.innerText = eval(display.innerText);
    } else {
      // Append the button text to the display
      display.innerText += buttonText
    };

        console.log(display.innerText);
  });
})

