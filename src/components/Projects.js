import React, { useContext, useState } from "react";
import { Card, Button, Table } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { fetchData } from "../actions"

function Projects() {

  const context = useContext(GlobalContext);
  const [myProjects, setMyProjects] = useState([])

  React.useEffect(() => {
    const fetch = async () => {
      const data = await fetchData('projects');
      console.log('Projects', data)
      setMyProjects(data);
    }
    fetch();
  }, [])

  return (
    <div>
      <Button>Create New Project</Button>
      <Card>
        <Card.Title>
          <span>Your Projects</span>
          <span>All the projects you have in the database</span>
        </Card.Title>
        <Card.Body>
          <span>
            <label htmlFor="search">Search Project: </label>
            <input id="search" type="text" />
          </span>
          <Table striped border hover>
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <MyProjects myProjects={myProjects} />
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer>
          <Button>Prev</Button>
          <Button>Next</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

const MyProjects = (props) => {
  return props.myProjects.map((project) => {
    return (
      <tr key={project.project_id}>
        <td>{project.project_name}</td>
        <td>{project.project_description}</td>
        <td>
          <span>
            <Button>Users</Button>
          </span>
          <span>
            <Button>
              <Link style={{ textDecoration: 'none', color: 'white' }} to={{ pathname: "/project", data: project }}>
                More Info
              </Link>
            </Button>
          </span>
        </td>
      </tr>
    );
  });
};

const handleProject = (event) => {
  console.log(event.target.value);
};

export default Projects;
