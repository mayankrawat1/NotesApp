import React from "react";
import { Note } from "../models/note.model";
import Notes from "./Notes";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FC<INotesListProps> = ({ notes, setNotes }) => {
  const handleDelete = (id: string) => {
    if (id) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <>
      <div className="container mb-4">
        {notes.length > 0 &&
          notes.map((note) => {
            return (
              <div className="mt-3" key={note.id}>
                <Notes note={note} handleDelete={handleDelete} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default NotesList;
