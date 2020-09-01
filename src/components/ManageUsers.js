import React, { useState, useContext } from "react";
import Select from "react-select";
import { GlobalContext } from "../context/GlobalState";
import { Button, Card, Table } from "react-bootstrap";

function ManageUsers() {
  let context = useContext(GlobalContext);
  let [searchTerm, setSearchTerm] = useState("");

  let people = context.people;
  let createPeopleOptions = () => {
    let options = context.people.map((person) => {
      return { value: person.person_id, label: person.person_name };
    });
    return options;
  };

  let createRolesOptions = () => {
    let options = context.roles.map((role) => {
      return { value: role, label: role };
    });
    return options;
  };

  return (
    <>
      <div>Manage User Roles</div>
      <div>
        <span>Select 1 or more users</span>
        <Select isMulti options={createPeopleOptions()} />

        <br />
        <br />

        <span>Select Role</span>
        <Select options={createRolesOptions()} />

        <Button block>Assign Roles</Button>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Title>
            <span>Your Personnel</span>
            <span>All the users in your database</span>
          </Card.Title>
          <Card.Body>
            <div>
              <label htmlFor="search">Search Person:</label>
              <input id="search" type="text" onChange={setSearchTerm} />
            </div>
          </Card.Body>
          <Card.Footer>
            <span>Showing 1 to 10 of 13 entries</span>
            <span>
              <Button>Prev</Button>
              <Button>Next</Button>
            </span>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
}

const People = (props) => {
  //bakit dun sa Road to React wala namang return
  return props.people.map((person) => (
    <tr key={person.person_id}>
      <td>{person.person_name}</td>
      <td>{person.person_email}</td>
      <td>{person.person_role}</td>
    </tr>
  ));
};

export default ManageUsers;
