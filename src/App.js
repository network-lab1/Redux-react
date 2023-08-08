import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudent, deleteStudent } from "./actions";
import { Form, Button, Container, Row, Col ,Table} from "react-bootstrap"; // Import React Bootstrap components
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import "./App.css";

const App = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent(name, age, country, province));
    setName("");
    setAge("");
    setCountry("");
    setProvince("");
  };

  const handleDelete = (index) => {
    dispatch(deleteStudent(index));
  };

  return (
    <div>
      <Container>
      <Container>
        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit} className="custom-form">
              <Form.Group controlId="formName">
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <br></br>

              <Form.Group controlId="formAge">
                {/* <Form.Label>Age</Form.Label> */}
                <Form.Control
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </Form.Group>
              <br></br>

              <Form.Group controlId="formCountry">
                {/* <Form.Label>Country</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </Form.Group>
              <br></br>

              <Form.Group controlId="formProvince">
                {/* <Form.Label>Province</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Province"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  required
                />
              </Form.Group>
              <br></br>

              <Button variant="primary" type="submit">
                Add Student
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <br></br>
      <br></br>

      <Container>
        <Row>
          <Col md={6}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Country</th>
                  <th>Province</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.country}</td>
                    <td>{student.province}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      </Container>
    </div>
  );
};

export default App;
