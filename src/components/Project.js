import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Table } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

function Project(props) {
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
            <Button>
              <Link to={{ pathname: "/editproject", data: project }}>
                Edit Project
              </Link>
            </Button>
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
export default Project;
