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
// const containerForEntries = document.querySelector('#testFieldSetDom');

// THis code calls the API and logs the response with RenderDom setup on another page


API.getJournalEntries()
    .then(response => renderDom.renderJournalEntries(response))


// attempting to get a reference to the dom and then tie it to the event listener for click of save entry.

// This is my factory function but I need to make it more modular by seperating out my factory function and calling it outside of this container.

document.querySelector('#recordEntryButton').addEventListener("click", event => {
    // These are obtaining references and defining them as variables so that I can Collect UserInput
    const inputObject = {
        date: document.querySelector('#dateEntryInput').value,
        concept: document.querySelector('#conceptEntryInput').value,
        journal: document.querySelector('#journalEntryInput').value,
        mood: document.querySelector('#moodEntryInput').value,
    }

    // Trying to create Code that SaveJournalEntry (json-server returns it) then render it on the dom
    // console.log(inputObject)

    API.saveJournalEntry(inputObject)
        .then(API.getJournalEntries)
        .then(entries => renderDom.renderJournalEntries(entries))

});


// Me and James and Charles built this paired coding and it is a function with a reference 
const moodRadio = document.getElementsByName("moodName");

moodRadio.forEach(radioButton => {
            
    radioButton.addEventListener("click", event => {
                const updateMoodRadio = event.target.value
                
                // console.log(updateMoodRadio)
                
                API.getJournalEntries() 
                    
                .then((entries) => {
                    
                        let moodEntriesFiltered = entries.filter(entry => 
                            
                        entry.mood === updateMoodRadio)
                //         
                        renderDom.renderJournalEntries(moodEntriesFiltered)
                //         
                })
            })

        });
            