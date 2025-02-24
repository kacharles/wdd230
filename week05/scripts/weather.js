//select all html elements in the document 
const myTown = document.querySelector("#town"); 
const description = document.querySelector("#description"); 
const temperature = document.querySelector("#temperature"); 
const graphic = document.querySelector("#graphic"); 

const myKey = "c1bd126619feed8c7129bbdeb90eed16"; 
const myLat = "6.247169804803506"; 
const myLong = "-10.675933002156956"; 

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

//Fetching the current weather API 

async function apiFetch() { 
    try { 
    const response = await fetch(myURL); 
    if(response.ok) { 
        const data = await response.json(); 
        console.log(data); 
        displayResults(data);
    }
    else { 
        throw Error(await response.text()); 
    }
} catch (error) { 
    console.log(error);
}
}

apiFetch(); 

// Display the Json data onto my web page 

function displayResults(data) { 
    // alert("Displaying...");
    myTown.textContent = data.name;
    myTown.textContent = "ELWA Junction";
    description.innerHTML = data.weather[0].description; 
    temperature.innerHTML = `${data.main.temp}&deg;F`; 
    description.style.textTransform =  "capitalize";
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    graphic.setAttribute('src', iconsrc); 
    graphic.setAttribute('alt', data.weather[0].description);
}