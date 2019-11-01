// This is a variable I declared to hold my URL for my fetch calls and API
const URLforAPI = "http://localhost:3000/entries";



// THis is where I declare a const or variable for the API functions I am using to getjournalEntries and to saveJournalEntries

const API = {
 
  // This is my getJournal Entries fetch call. It returns the fetch of the API local and then parses the response into json for me and calls itself.
  getJournalEntries () {
      return fetch(URLforAPI)
          .then(response => response.json())
  },
  
  // This is a saveJOurnalEntry fetch and object that I made using code from the examples and steve Brownlee and Kristen Norris' Lessons
  // IT takes an argument of entry and then returns a fetch and enacts the method POST to post onto the dom IT also makes the JSON response into a string for Entry
  saveJournalEntry (entry) {
    return fetch(URLforAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry) 
    });
  }
}


// This exports the function and allows it to be used outside with import
export default API;