//create variables to hold the ui elements
const input = document.querySelector("#chapter"); 
const btn = document.querySelector("#btn"); 
const list = document.querySelector("#list"); 

//add a click event listener to the button
btn.addEventListener("click", () => { 
    const text = input.value; 
    input.value = ""; 

    //Create a list and append the chapter to it. 
    const listItem = document.createElement("li"); 
    const listText = document.createElement("span"); 
    const listBtn = document.createElement("button"); 

    listItem.appendChild(listText); 
    listItem.appendChild(listBtn); 

    listText.textContent = text; 
    listBtn.textContent = "❎"; 

    list.appendChild(listItem); 

    listBtn.addEventListener("click", () => { 
        list.removeChild(listItem); 
        input.focus(); 
    });
    

});