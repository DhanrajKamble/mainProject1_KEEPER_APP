import React, { useState } from "react";
import EachNote from "./EachNote";

function Notes(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevValue => ({ ...prevValue, [name]: value }));
  }

  function handleClick(event) {
    event.preventDefault();
    if (note.title && note.content) {
      props.onAddNote(note); // Adds the note to the notesArray in App
      setNote({ title: "", content: "" }); // Resets the form after adding
    }
  }

  return (
    <div className={props.className}>
      <form>
        <input
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Title"
          className="title"
          value={note.title}
        />
        <input
          onChange={handleChange}
          name="content"
          type="text"
          placeholder="Content..."
          className="content"
          value={note.content}
        />
        <button onClick={handleClick} type="submit" className="btn">
          +
        </button>
      </form>

      {props.notes.map((note, index) => (
        <EachNote
          key={index}
          index={index}
          title={note.title}
          content={note.content}
          onDeleteNote={props.onDeleteNote}
        />
      ))}
    </div>
  );
}

export default Notes;
