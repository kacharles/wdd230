// Selements, classes, and IDs from the document 
const year = document.querySelector('#year'); 
const lmf = document.querySelector('#lmf'); 
const darkBtn = document.querySelector('#darkBtn');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const mainEle = document.querySelector('main');
const ul = document.querySelectorAll('.navigation');
const isSelected = false;
const ullist = document.querySelectorAll('.navigation li');


// Adding an active script to the page
ullist.forEach(ele => {
    ele.addEventListener("click", () => { 
        document.querySelector('.active')?.classList.remove("active");
        ele.classList.add("active");
    })
})
// Dynamically adding the footer to the page 
year.innerHTML = `&copy; ${new Date().getFullYear()} 🌴 Charles Alfred Koenig 🌴 Monrovia, Liberia.</span>`;
lmf.textContent = "Last Modified: " + document.lastModified;

const menuBtn = document.querySelector('#menu');
const navList = document.querySelector('ul'); 

menuBtn.addEventListener("click", () => { 
    menuBtn.classList.toggle("activate");
    navList.classList.toggle("activate");
})

darkBtn.addEventListener("click", () => { 
    header.classList.toggle("dark");
    footer.classList.toggle("dark");
    mainEle.classList.toggle("dark");
});

// list.array.forEach(element => {
//     element.addEventListener("click", () => { 
//         list.classList.toggle("active");
//     })
// });

