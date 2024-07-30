import React, { useState } from 'react';
import NoteForm from '../Componunts/NoteForm';
import NoteList from '../Componunts/NoteList';


function Note() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <h1>Note Taking App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default Note;
