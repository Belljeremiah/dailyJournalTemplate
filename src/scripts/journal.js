/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import API from "./data.js";
import renderDom from "./entriesDOM.js";

// Targeting or Obtaining a reference to DOM with variables declared for later use for input fields

// const dateEntryVar = document.querySelector('#dateEntryInput');
// const conceptEntryVar = document.querySelector('#conceptEntryInput');
// const journalEntryVar = document.querySelector('#journalEntryInput');
const containerForEntries = document.querySelector('#testFieldSetDom');

// THis code calls the API and logs the response with RenderDom setup on another page


API.getJournalEntries()
.then(response => renderDom.renderJournalEntries(response))


// attempting to get a reference to the dom and then tie it to the event listener for click of save entry.

// const saveJournalEntry = () => 
    
document.querySelector('#recordEntryButton').addEventListener("click", event => {
    
    const dateEntryVar = document.querySelector('#dateEntryInput').value;
    
    const conceptEntryVar = document.querySelector('#conceptEntryInput').value;
    
    const journalEntryVar = document.querySelector('#journalEntryInput').value;
    

    containerForEntries.innerHTML += `
        <section>
            <h3>${journalEntryVar}</h3>
            <h3>${conceptEntryVar}</h3>
            <h3>${dateEntryVar}</h3>    
            </section>
    `

});
    

    
