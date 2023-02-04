import React from "react";
import { Button, Card } from "react-bootstrap";
import { Note } from "../models/note.model";

interface INotesProps {
  note: Note;
  handleDelete: (id: string) => void;
}

const Notes: React.FC<INotesProps> = ({ note, handleDelete }) => {
  return (
    <>
      <Card style={{ backgroundColor: note.color }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Text>
            <strong>CreatedAt : </strong>
            {note.date}
          </Card.Text>
          <Button variant="danger" onClick={() => handleDelete(note.id)}>
            Delete Note
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Notes;
