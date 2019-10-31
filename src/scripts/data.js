// This is a variable I declared to hold my URL for my fetch calls and API
const URLforAPI = "http://localhost:3000/entries";




const API = {
 
  getJournalEntries () {
      return fetch(URLforAPI)
          .then(response => response.json())
  },
  
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