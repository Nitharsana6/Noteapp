import React from 'react';
import EachNote from '../Componunts/Eachnote';

function NoteList({ notes }) {
  return (
    <div>
      {notes.map((note, index) => (
        <EachNote key={index} note={note} />
      ))}
    </div>
  );
}

export default NoteList;
