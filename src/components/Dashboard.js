import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import "./Dashboard.css";
import { GlobalContext } from "../context/GlobalState";
import CanvasJSReact from "../canvasjs.react";
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const Dashboard = () => {
  const context = useContext(GlobalContext);

  const getNumberByPriority = () => {
    let none = 0;
    let low = 0;
    let medium = 0;
    let high = 0;
    for (let i = 0; i < context.issues.length; i++) {
      if (context.issues[i].priority == "None") {
        none++;
      } else if (context.issues[i].priority == "Low") {
        low++;
      } else if (context.issues[i].priority == "Medium") {
        medium++;
      } else if (context.issues[i].priority == "High") {
        high++;
      }
    }

    return {
      none,
      low,
      medium,
      high,
    };
  };

  const getNumberByStatus = () => {
    let newIssue = 0;
    let openIssue = 0;
    let inProgressIssue = 0;
    let resolvedIssue = 0;
    let moreInfoIssue = 0;
    for (let i = 0; i < context.issues.length; i++) {
      if (context.issues[i].status == "New") {
        newIssue++;
      } else if (context.issues[i].status == "Open") {
        openIssue++;
      } else if (context.issues[i].status == "In Progress") {
        inProgressIssue++;
      } else if (context.issues[i].status == "Resolved") {
        resolvedIssue++;
      } else if (context.issues[i].status == "Additional Info Required") {
        moreInfoIssue++;
      }
    }

    return {
      newIssue,
      openIssue,
      inProgressIssue,
      resolvedIssue,
      moreInfoIssue,
    };
  };

  const getNumberByProjects = () => {
    let projects = [];
    for (let i = 0; i < context.projects.length; i++) {
      projects.push({
        projectId: context.projects[i].project_id,
        label: context.projects[i].project_name,
        total: 0,
        y: 0,
      });
    }

    for (let i = 0; i < context.issues.length; i++) {
      projects.map((project) => {
        if (project.projectId === context.issues[i].related_project_id) {
          project.total++;
          project.y = (project.total / context.issues.length) * 100;
        }
      });
    }
    return projects;
  };

  let projectChartData = getNumberByProjects();

  let totalByPriorityType = getNumberByPriority();
  let totalByIssueStatus = getNumberByStatus();
  console.log(totalByIssueStatus);
  let arr = Object.values(getNumberByPriority());
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  console.log(`Min value: ${min}, max value: ${max}`);

  const priorityChart = {
    title: {
      text: "Tickets by Priority",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "None", y: totalByPriorityType.none },
          { label: "Low", y: totalByPriorityType.low },
          { label: "Medium", y: totalByPriorityType.medium },
          { label: "High", y: totalByPriorityType.high },
        ],
      },
    ],
  };

  const statusChart = {
    title: {
      text: "Tickets by Status",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "New", y: totalByIssueStatus.newIssue },
          { label: "Open", y: totalByIssueStatus.openIssue },
          { label: "In Progress", y: totalByIssueStatus.inProgressIssue },
          { label: "Resolved", y: totalByIssueStatus.resolvedIssue },
          {
            label: "Additional Info Needed",
            y: totalByIssueStatus.moreInfoIssue,
          },
        ],
      },
    ],
  };

  const projectsChart = {
    theme: "dark2",
    animationEnabled: true,
    exportFileName: "New Year Resolutions",
    exportEnabled: true,
    title: {
      text: "Top Categories of New Year's Resolution",
    },
    data: [
      {
        type: "pie",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        indexLabel: "{y}%",
        indexLabelPlacement: "inside",
        dataPoints: projectChartData,
      },
    ],
  };
  return (
    <div
      style={{
        background: "#f7f7f7",
        display: "flex",
        flexdirection: "column",
        alignitems: "center",
        justifycontent: "center",
        minheight: "100vh",
        margin: "0",
      }}
    >
      <Card style={{ width: "18rem", background: "blue", color: "white" }}>
        <Card.Body>
          <CanvasJSChart
            options={priorityChart}
            /* onRef = {ref => this.chart = ref} */
          />
        </Card.Body>
        <Card.Footer>Tickets by Priority</Card.Footer>
      </Card>
      <Card style={{ width: "18rem", background: "blue", color: "white" }}>
        <Card.Body>
          <CanvasJSChart options={projectsChart} />
        </Card.Body>
        <Card.Footer>Tickets by Type</Card.Footer>
      </Card>
      <Card style={{ width: "18rem", background: "blue", color: "white" }}>
        <Card.Body>
          <CanvasJSChart options={statusChart} />
        </Card.Body>
        <Card.Footer>Tickets by Status</Card.Footer>
      </Card>
      <Card style={{ width: "18rem", background: "blue", color: "white" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>Tickets by Priority</Card.Footer>
      </Card>
    </div>
  );
};
