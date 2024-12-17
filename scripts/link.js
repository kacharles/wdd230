const baseURL = "https://kacharles.github.io/wdd230/"; 
const linksURL = "https://kacharles.github.io/wdd230/data/link.json"; 
const List = document.querySelector("#list");

async function getLinks() {
    console.log('Working..nicely')
    const response = await fetch(linksURL); 
    const data = await response.json(); 
    // console.log(data.weeks); 
    displayLinks(data.weeks);
}

displayLinks = (links) => { 
    // console.log("Working...")
    links.forEach((link) => {
        let listEle = document.createElement("li"); 
        let hlink = document.createElement("a"); 
        let hlink1 = document.createElement("a");
        let sp = document.createElement("span");
        sp.textContent = "|";
        hlink.textContent = `${link.links[0].title}`;

        hlink1.textContent = `${link.links[1].title}`;
        // console.log(link.week);
        hlink.setAttribute("href", link.links[0].url); 
        hlink1.setAttribute("href", link.links[1].url)
        // hlink.setAttribute("href", link.links[1].url);
        listEle.textContent = `${link.week}:${" "}`;
        listEle.appendChild(hlink);
        listEle.appendChild(sp);
        listEle.appendChild(hlink1);
       List.appendChild(listEle);
        
    });
}

getLinks();