import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Card, Button, Table } from "react-bootstrap";

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
              <Button>Add Issue</Button>
            </div>
            <Table></Table>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Issues;
