const API = {
  getJournalEntries () {
      return fetch("http://localhost:3000/entries")
          .then(response => response.json())
  }
}

// This exports the function and allows it to be used outside with import
export default API;