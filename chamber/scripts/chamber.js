// Implementing the Drop-down menu function
// alert("Working!")
const menuBtn = document.querySelector("button"); 
const mobileMenu = document.querySelector("#mobile-menu"); 

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("activate");
    mobileMenu.classList.toggle("activate");
});

// Dynamically adding the footer to the page 

const copyright = document.querySelector("#copyright");
const lastModified = document.querySelector("#lastModified");

copyright.innerHTML = `&copy; ${new Date().getFullYear()} | Charles Alfred Koenig | WDD 230 Web Frontend Development.</span>`;
lastModified.textContent = "Last Modified: " + document.lastModified;