const year = document.querySelector('#year'); 
const lmf = document.querySelector('#lmf'); 
year.innerHTML = `&copy; ${new Date().getFullYear()} 🌴 Charles Alfred Koenig 🌴 Monrovia, Liberia.</span>`;
lmf.textContent = "Last Modified: " + document.lastModified;


const menuBtn = document.querySelector('#menu');
const navList = document.querySelector('ul'); 

menuBtn.addEventListener("click", () => { 
    menuBtn.classList.toggle("activate");
    navList.classList.toggle("activate");
})