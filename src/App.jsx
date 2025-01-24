import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import "./styles/app.css";

function App() {
  const [notesArray, setNotesArray] = useState([]);

  function handleAddNote(note) {
    setNotesArray(prevNotes => [...prevNotes, note]);
  }

  function handleDeleteNote(index) {
    setNotesArray(prevNotes => prevNotes.filter((note, i) => i !== index));
  }

  return (
    <div>
      <Header className="header" />
      <Notes className="notes" onAddNote={handleAddNote} onDeleteNote={handleDeleteNote} notes={notesArray} />
      <Footer className="footer" />
    </div>
  );
}

export default App;
