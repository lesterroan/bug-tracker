import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import {
  Card,
  Button,
  Table,
  Form,
  InputGroup,
  FormControl,
  FormLabel,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function Issues() {
  const context = useContext(GlobalContext);
  let issues = context.issues;

  return (
    <div>
      <Card>
        <Card.Title>Issues Available to Me</Card.Title>
        <Card.Body>
          <div>
            <div>
              <span>
                <label htmlFor="search">Search Issue</label>
                <input id="search" type="text" />
              </span>
              <Button>Add New Issue</Button>
            </div>
            <Table>
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Issue Summary</td>
                  <td>Date Identified</td>
                  <td>Status</td>
                  <td>Priority</td>
                  <td>Target Resolution Date</td>
                  <td>Actual Resolution Date</td>
                  <td>Progress</td>
                  <td>Identified By</td>
                  <td>Project Name</td>
                  <td>Assigned To</td>
                  <td>Edit Issue</td>
                </tr>
              </thead>
              <tbody>
                <AllIssues issues={issues} />
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

const AllIssues = (props) => {
  return props.issues.map((issue) => {
    return (
      <tr key={issue.issue_id}>
        <td>{issue.issue_id}</td>
        <td>{issue.issue_summary}</td>
        <td>{issue.identified_date}</td>
        <td>{issue.status}</td>
        <td>{issue.priority}</td>
        <td>{issue.target_resolution_date}</td>
        <td>{issue.actual_resolution_date}</td>
        <td>{issue.progress}</td>
        <td>Get person by id</td>
        <td>get project by id</td>
        <td>get assigned to by id</td>
        <td>
          <EditIssue />
        </td>
      </tr>
    );
  });
};

const EditIssue = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Issue Properties</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Title>Issue Identification</Card.Title>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Issue Summary</Form.Label>
                  <FormControl as="textarea" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Issue Description</Form.Label>
                  <FormControl as="textarea" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Related Project</Form.Label>
                  <Form.Control as="select">
                    <option>Project 1</option>
                    <option>Project 2</option>
                    <option>Project 3</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Identified By</Form.Label>
                  <Form.Control as="select">
                    <option>Person 1</option>
                    <option>Person 2</option>
                    <option>Person 3</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Identified Date</Form.Label>
                  <Form.Control as="input"></Form.Control>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>

          <Card>
            <Card.Title>Progress</Card.Title>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Assigned To</Form.Label>
                  <Form.Control as="select">
                    <option>Person 1</option>
                    <option>Person 2</option>
                    <option>Person 3</option>
                    <option>Person 4</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Form.Check inline type="radio" label="Open" />
                  <Form.Check inline type="radio" label="On-Hold" />
                  <Form.Check inline type="radio" label="Closed" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Priority</Form.Label>
                  <Form.Check inline type="radio" label="High" />
                  <Form.Check inline type="radio" label="Medium" />
                  <Form.Check inline type="radio" label="Low" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Target Resolution Date</Form.Label>
                  <Form.Control as="input" />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger">Delete</Button>
          <Button variant="primary">Apply Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Issues;
