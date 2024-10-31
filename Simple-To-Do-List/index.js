const button = document.getElementById("button");
const display = document.getElementsByClassName("display")[0];

button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    
    const text = document.getElementById("input").value.trim(); // Get the latest input value
    
    if (text === "") {
        alert("You must enter the text");
    } else {
        console.log(text);

        
        // Create a new <p> element
        const p = document.createElement("p");
        p.innerText = text;
        
        const delButton = document.createElement("button")
        delButton.innerText = "x"
        delButton.classList.add("delButton")

        delButton.addEventListener("click", (event) =>{
            p.remove();
        })
        p.appendChild(delButton)
        // Append the <p> element to the display container
        display.appendChild(p);
        
        // Clear the input field after submission
        document.getElementById("input").value = "";
    }
});


