const signIn = document.getElementById("signinButton")
const signUp = document.getElementById("signupButton")
const sighInBlock = document.getElementById("sighInBlock");
const sighUpBlock = document.getElementById("sighUpBlock");


signIn.addEventListener("click" , () => {
    sighUpBlock.classList.add("is-hidden");
    sighUpBlock.classList.remove("show");
    
    sighInBlock.classList.remove("is-hidden");
    sighInBlock.classList.add("show");
})

signUp.addEventListener("click" , () => {
    sighUpBlock.classList.remove("is-hidden");
    sighUpBlock.classList.add("show");

    sighInBlock.classList.add("is-hidden");
    sighInBlock.classList.remove("show");
   
})