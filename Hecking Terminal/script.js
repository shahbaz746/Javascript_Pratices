  async function hackingTerminal() {
    setTimeout(() => {
       const li = document.createElement("li");     // Create <li> element
        li.textContent = "Hackin Start...";           // Set text of <li>
        document.querySelector("ul").appendChild(li);
    }, 3000);
   await setTimeout(() => {
       const li = document.createElement("li");     // Create <li> element
        li.textContent = "HFatching Start...";           // Set text of <li>
        document.querySelector("ul").appendChild(li);
    }, 1000);
    setTimeout(() => {
       const li = document.createElement("li");     // Create <li> element
        li.textContent = "Getting Data Form Server...";           // Set text of <li>
        document.querySelector("ul").appendChild(li);
    }, 9000);
    setTimeout(() => {
       const li = document.createElement("li");     // Create <li> element
        li.textContent = "Data Is Fetched Sucessfullay...";           // Set text of <li>
        document.querySelector("ul").appendChild(li);
    }, 12000);
    
}

 hackingTerminal();
