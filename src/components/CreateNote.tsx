import React, { useState, useRef } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Note } from "../models/note.model";

interface ICreateNoteProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNote: React.FC<ICreateNoteProps> = ({ notes, setNotes }) => {
  const [error, setError] = useState<string>("");

  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("All fields are mandatory");
    }

    setError("");
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ]);

    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
    (colorRef.current as HTMLInputElement).value = "#F7E7CE";
  };

  return (
    <>
      <div className="mt-4">
        <h3>Create Note</h3>
      </div>
      <div>{error && <Alert variant="danger">{error}</Alert>}</div>
      <div className="mt-3 mb-3">
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              ref={titleRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Text"
              as="textarea"
              ref={textRef}
              style={{ height: "100px" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicColor">
            <Form.Label>Note Color</Form.Label>
            <Form.Control type="color" defaultValue="#F7E7CE" ref={colorRef} />
          </Form.Group>
          <Button variant="dark" type="submit">
            Add Note
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateNote;
