import React, { useState } from "react";
import Header from "./components/Header";
import { Note } from "./models/note.model";
import { Col, Container, Row } from "react-bootstrap";
import NotesList from "./components/NotesList";
import CreateNote from "./components/CreateNote";
import "./App.css";

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([] as Note[]);

  return (
    <div className="App">
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <CreateNote notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
