import React from 'react';
import './Note.css';

export default function Note({
  noteTitle,
  noteCategory,
  noteMessage,
  allNotes,
  setAllNotes,

}) {
  function deleteNote() {

    // Create new array to store all notes except deleted note
    const newAllNotes = [];

    // Add all notes to array except the deleted note
    allNotes.map((note) => {
      if (note.title !== noteTitle || note.category !== noteCategory || note.message !== noteMessage) {
        newAllNotes.push(note);
      }
    });

    // Update state variable that stores all notes to contain new array of notes
    setAllNotes(newAllNotes);
  }

  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  const date = `${day}/${month}/${year}`;

  return (
    <div className="note">
      <p id="note-date">{date}</p>
      <p id="note-title">{noteTitle}</p>
      <p id="note-category">{noteCategory}</p>
      <p id="note-message">{noteMessage}</p>
      <button id="del-button" onClick={deleteNote}>
        Delete
      </button>
    </div>
  );
}
