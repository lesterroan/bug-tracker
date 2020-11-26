import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Table,
  Container,
  Row,
  Col,
  Form,
  InputGroup,
} from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Project(props) {
  const [projectName, setProjectName] = React.useState('');

  const goBackToProjects = () => {
    props.history.goBack();
  };
  const getProjectIssues = (projectId) => {
    //This must be a firebase call
    return context.issues.filter(
      (issue) => issue.related_project_id === projectId
    );
  };

  const getAssignedPeople = (projectId) => {
    return context.people.filter(
      (person) => person.assigned_project === projectId
    );
  };
  let project = props.location.data;
  console.log(project);
  const context = useContext(GlobalContext);
  const issues = getProjectIssues(project.project_id);
  console.log(issues);
  const people = getAssignedPeople(project.project_id);

  return (
    <div>
      Project Details
      <Card>
        <Card.Title>
          <span>{project.project_name} Details</span>
          <span>
            <Button onClick={goBackToProjects}>All Projects</Button>

            {/* <Link to={{ pathname: "/editproject", data: project }}>
                Edit Project 
              </Link> */}
            <EditProject project={project} />
          </span>
        </Card.Title>
        <Card.Body>
          <Card>
            <Card.Title>Assigned Personnel</Card.Title>
            <Card.Body>
              <Table>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Role</td>
                  </tr>
                </thead>
                <tbody>
                  <People people={people} />
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>Related Issues</Card.Title>
            <Card.Body>
              <Table striped>
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Description</td>
                    <td>Status</td>
                    <td>Target Resolution Date</td>
                  </tr>
                </thead>
                <tbody>
                  <Issues issues={issues} />
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
}

const Issues = (props) => {
  return props.issues.map((issue) => {
    return (
      <tr key={issue.issue_id}>
        <td>{issue.issue_id}</td>
        <td>{issue.issue_description}</td>
        <td>{issue.status}</td>
        <td>{issue.target_resolution_date}</td>
      </tr>
    );
  });
};

const People = (props) => {
  return props.people.map((person) => {
    return (
      <tr key={person.person_id}>
        <td>{person.person_name}</td>
        <td>{person.person_email}</td>
        <td>{person.person_role}</td>
      </tr>
    );
  });
};

const EditProject = (props) => {
  console.log("selected project", props);
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
      >
        <Modal.Header>
          <Modal.Title>Edit Project Properties</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Project Name</Form.Label>
              <Form.Control type="text" placeholder={props.project.project_name} />
              <Form.Text className="text-muted">
                Enter a relevant project name.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Col>
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control type="text" placeholder="initial value" />
                  <PickDate startDate={props.project.start_date} />
                  <Form.Label>Target End Date</Form.Label>
                  <Form.Control type="text" placeholder="initial value" />
                </Col>
                <Col>
                  <InputGroup className="mb-2 mr-sm-2">
                    <Form.Label>Actual End Date</Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="initial value"
                    />
                    <InputGroup.Prepend>
                      <InputGroup.Text>@</InputGroup.Text>
                    </InputGroup.Prepend>
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form.Group>
          </Form>
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

const PickDate = (props) => {
  console.log("Start Date", props)
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (date) => {
    setStartDate(date);
  };

  return <DatePicker selected={startDate} onChange={handleChange} />;
};

export default Project;
