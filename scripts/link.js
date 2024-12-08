const baseURL = "https://kacharles.github.io/wdd230/"; 
const linksURL = "https://kacharles.github.io/wdd230/data/link.json"; 

async function getLinks() {
    const response = await fetch(linksURL); 
    const data = await response.json(); 
    console.log(data); 
    displayLinks(data.weeks);
}

displayLinks = (links) => { 
    console.log("Working...")
    links.forEach((links) => {
        //get the links element
        //set the text content
        //set the href attribute and value
        let weeksList = document.querySelector("#learning-activities"); 
        weeksList.textContent = "Thank you"; 
        // let weekOne = document.createElement("li"); 
        // let link1 = document.createElement("a"); 
        // let link2 = document.createElement("a"); 

        // weekOne.innerHTML =`Week 1:`;
        // link.textContet = link.week[0].links.title; 
        // link.setAttribute("href", link.weeks[0].link.url);

        // weekOne.appendChild(link1);
        // weeksList.appendChild(weekOne);
    });
}
getLinks();