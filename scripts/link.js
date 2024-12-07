const baseURL = "https://kacharles.github.io/wdd230/"; 
const linksURL = "https://kacharles.github.io/wdd230/data/link.json"; 

async function getLinks() {
    const response = await fetch(linksURL); 
    const data = await response.json(); 
    console.log(data); 
    displayLinks(data);
}
getLinks(); 

displayLinks = (links) => { 
    links.forEach(link => {
        //get the links element
        //set the text content
        //set the href attribute and value
    });
}