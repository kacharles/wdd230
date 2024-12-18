

const url = "https://kacharles.github.io/wdd230/chamber/data/member.json"; 
console.log(url);

async function getData() { 
    const response = await fetch(url); 
    const data = await response.json(); 
    console.log(data); 
    displayInfo(data.members);
    
}

displayInfo = (members) => { 
    members.forEach((member) => { 
        const main = document.querySelector("#grid"); 
        let sectionEle = document.createElement("section"); 
        let portrait = document.createElement("img"); 
        let heading = document.createElement("h3"); 
        let address = document.createElement("p");
        let url = document.createElement("p");
        
        // console.log(member.website);

        portrait.setAttribute("src", member.image);
        portrait.setAttribute("alt", member.name);

        heading.textContent = `${member.name}`; 
        address.textContent = `${member.address}`; 
        url.textContent = `${member.website}`;

        sectionEle.appendChild(portrait);
        sectionEle.appendChild(heading); 
        sectionEle.appendChild(address);
        sectionEle.appendChild(url); 
 
        main.appendChild(sectionEle);
        //alert('This is a function');
        // main.textContent = "Main Content";
    });
}
getData();