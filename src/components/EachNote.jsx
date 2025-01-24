function EachNote(props) {
    return (
      <div className="each-note">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <button
          type="button"
          className="note-delete"
          onClick={() => props.onDeleteNote(props.index)} // Calls delete function from parent
        >
          DELETE
        </button>
      </div>
    );
  }
  
  export default EachNote;
  