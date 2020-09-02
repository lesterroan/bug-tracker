import React from "react";

function Editproject(props) {
  let project = props.location.data;
  console.log(project);
  return <div>Edit {project.project_name}</div>;
}

export default Editproject;
