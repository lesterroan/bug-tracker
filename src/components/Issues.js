import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Card, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Link>Edit Issue</Link>
        </td>
      </tr>
    );
  });
};

export default Issues;
