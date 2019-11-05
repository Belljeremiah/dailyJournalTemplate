/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/


// This is my import from entryComponent(entryCOmp makes a structure to return the entries as HTML which allows the next functions to work. Entry Component.js is a dependency for this file)
import entryManager from "./entryComponent.js";


// This is my renderDom function, It takes my entries and feeds them
const renderDom = {
  
  // This is a concise method or function that takes entries and feeds it to itself later.
  renderJournalEntries(entries) {
    
    let HtmlForAllEntries = "";
      
    entries.forEach(entry => {
      
    const entryHtml = entryManager.makeJournalEntryComponent(entry);
      
    // THis tells it to iterate through each one
    HtmlForAllEntries += entryHtml;
    
  })
    
    const logArticle = document.querySelector(".entryLog");
      
    logArticle.innerHTML = HtmlForAllEntries;
 
  }
}

// This exports the function and allows it to be used outside with import
export default renderDom;