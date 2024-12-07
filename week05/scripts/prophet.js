const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector("#cards"); 

async function getProphet() { 
    const response = await fetch(url); 
    const data = await response.json(); 
    // console.table(data.prophets); //tempoary testing of date retrevival
    // cards.innerHTML = `${data.prophets[1]}`;
}
getProphet(); 

async function getProphetData() { 
    const response = await fetch(url);
    const data = await response.json(); 
    displayProphets(data.prophets);
};

displayProphets = (prophets) => {  
    prophets.forEach((prophets) => {
        let card = document.createElement('section');
        let fullName  = document.createElement('h2'); 
        let portrait = document.createElement('img'); 
        fullName.textContent = `${prophets.name} ${prophets.lastname}`;

        portrait.setAttribute('src', prophets.imageurl); 
        portrait.setAttribute('alt', `Portrait of ${prophets.name} ${prophets.lastname}`);
        portrait.setAttribute('loading', 'lazy'); 
        portrait.setAttribute('width', '340'); 
        portrait.setAttribute('height', 440); 

        card.appendChild(fullName); 
        card.appendChild(portrait); 
        cards.appendChild(card); 
    })
};

getProphetData(); 