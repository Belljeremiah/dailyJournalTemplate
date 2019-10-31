const entryManager = {

  makeJournalEntryComponent(journalEntry) {
    // Create your own HTML structure for a journal entry
    return `
      <section>
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
        <p>${journalEntry.date}</p>
      </section>
    `
  }
}

// This exports the function and allows it to be used outside with import
export default entryManager;