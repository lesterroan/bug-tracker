import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  // roles = [
  //     {role_id: 1, role_title: "Admin"}
  // ],
  // people = [
  //     {
  //         name: {
  //             first: "John",
  //             middle: "Smith",
  //             last: "Doe"
  //         },
  //         id: "1289jdklsjf",
  //         role_id: 1
  //     }
  // ],
  // bugs = {

  // }
  projects: [
    {
      project_id: 1,
      project_name: "Project 1",
      project_description: "qwertyu",
      start_date: "date",
      target_end_date: "date",
      actual_end_date: "date",
      created_on: "date",
      created_by: "name",
      modified_on: "date",
      modified_by: "name",
    },
    {
      project_id: 2,
      project_name: "Project 2",
      project_description: "sdfghjk",
      start_date: "date",
      target_end_date: "date",
      actual_end_date: "date",
      created_on: "date",
      created_by: "name",
      modified_on: "date",
      modified_by: "name",
    },
  ],
  people: [
    {
      person_id: 12,
      person_name: "Joe",
      person_email: "Joe@gmail.com",
      person_role: "Admin",
      username: "user",
      password: "password",
      assigned_project: 1,
      created_on: "Date object",
      created_by: "name",
      modified_on: "date",
      modified_by: "name",
    },
    {
      person_id: 13,
      person_name: "Jane",
      person_email: "Jane@gmail.com",
      person_role: "Admin",
      username: "user",
      password: "password",
      assigned_project: 1,
      created_on: "Date object",
      created_by: "name",
      modified_on: "date",
      modified_by: "name",
    },
  ],
  issues: [
    {
      issue_id: 123,
      issue_summary: "djfkdjf",
      issue_description: "jkfdjkf",
      identified_by_person_id: 123,
      identified_date: "date",
      related_project_id: 1,
      assigned_to_person_id: 123,
      status: "New",
      priority: "Low",
      target_resolution_date: "date",
      progress: "kfjdkfj",
      actual_resolution_date: "date",
      resolution_summary: "jfkdjfk",
      created_on: "date",
      created_by: "kjfdkjfkd",
      modified_on: "date",
      modified_by: "jfkdjfk",
    },
    {
      issue_id: 124,
      issue_summary: "djfkdjf",
      issue_description: "jkfdjkf",
      identified_by_person_id: 123,
      identified_date: "date",
      related_project_id: 2,
      assigned_to_person_id: 123,
      status: "Open",
      priority: "Low",
      target_resolution_date: "date",
      progress: "kfjdkfj",
      actual_resolution_date: "date",
      resolution_summary: "jfkdjfk",
      created_on: "date",
      created_by: "kjfdkjfkd",
      modified_on: "date",
      modified_by: "jfkdjfk",
    },
    {
      issue_id: 125,
      issue_summary: "djfkdjf",
      issue_description: "jkfdjkf",
      identified_by_person_id: 123,
      identified_date: "date",
      related_project_id: 1,
      assigned_to_person_id: 123,
      status: "In Progress",
      priority: "Medium",
      target_resolution_date: "date",
      progress: "kfjdkfj",
      actual_resolution_date: "date",
      resolution_summary: "jfkdjfk",
      created_on: "date",
      created_by: "kjfdkjfkd",
      modified_on: "date",
      modified_by: "jfkdjfk",
    },
    {
      issue_id: 126,
      issue_summary: "djfkdjf",
      issue_description: "jkfdjkf",
      identified_by_person_id: 123,
      identified_date: "date",
      related_project_id: 2,
      assigned_to_person_id: 123,
      status: "Additional Info Required",
      priority: "High",
      target_resolution_date: "date",
      progress: "kfjdkfj",
      actual_resolution_date: "date",
      resolution_summary: "jfkdjfk",
      created_on: "date",
      created_by: "kjfdkjfkd",
      modified_on: "date",
      modified_by: "jfkdjfk",
    },
  ],
  roles: ["Admin", "Submitter", "Developer", "Project Manager"],
};



//Create Context
export const GlobalContext = createContext(initialState);
