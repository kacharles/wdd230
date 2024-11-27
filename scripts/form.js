const password = document.querySelector("#password");
const repeatpass = document.querySelector("#repeat-password"); 

const subBtn = document.querySelector("button"); 
const message = document.querySelector("#message")

subBtn.addEventListener("click", () => {
    if (password.value == repeatpass.value) { 
        message.textContent = "";
    }
    else { 
        console.log("Password do not match");
        message.textContent = "Password doesn't match. Please try again";
        password.focus();
        password.value = ""; 
        repeatpass.value = "";
        message.style.backgroundColor = "red";
        message.style.padding = "1rem";
    }
})