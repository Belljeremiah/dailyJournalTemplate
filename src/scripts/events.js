 // Attempting to Make My event Listener that Works with my Delete Button
import render from "./entriesDOM.js"
 import API from "./data.js";
 export default {

// This is declaring a function that Begins with Naming Convention
    registerDeleteListener () {
        // This Declares my variable for later use locally and ties it to the article class listed on the index.html
        const deleteButtonList = document.querySelector(".entryLog")
        // THis is where I actually attach my event listener to delete buttonlist declared earlier and set it up for the event of click as opposed to mouseover etc. 
        deleteButtonList.addEventListener("click", event => {
                // This begins a conditional, and sets it equal to the delete entry -- split ID which is what it starts with and then attaches it to the result of the event listener target.
            if (event.target.id.startsWith("deleteEntry--")){
                    // This declares another local variable to be used below setting the "split" as a position in the array 
                const entryToDelete = event.target.id.split("--")[1]
                        // console.log(entryToDelete)
                    // This is where I am calling outside functions to assist with this function. API is my data.js api call that allows deletejournalEntries to be fed the entryToDelete parameter.
                        API.deleteJournalEntries(entryToDelete)
                        // after the API function delete is fed it pauses to load and then call the remaining journal entries.
                        .then(API.getJournalEntries)
                        // THis uses my render function to post the new and updated or changed array onto the Dom.
                        .then(render.renderDom)
                }
            })
        }
    }      