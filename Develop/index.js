const inquirer = require("inquirer");
const connection = require("./config/connection");
const { listAllDepartments } = require("./lib/queries")
const { displayAllDepartments } = require("./lib/displays")

function start() {
  inquirer.prompt([
    {
      type: "list",
      message: "Choose an item from the list below:",
      name: "option",
      choices: [
        "List All Departments",
        "List All Roles",
        "List All Employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee Role",
        "Exit"
      ]
    }
  ]).then(response => {
    switch (response.option) {
      case "List All Departments":
        listAllDepartments().then(([rows]) => {
          displayAllDepartments(rows);
          start();
        });
        break;
        
      case "List All Roles":
        listAllRoles().then(([rows]) => {
          displayAllRoles(rows);
          start();
        });
        break;

      case "List All Employees":
        listAllEmployees().then(([rows]) => {
          displayAllEmployees(rows);
          start();
        });
        break;

      case "Add Department":
        inquirer.prompt([
          {
            type: "input",
            message: "Enter the department name:",
            name: "departmentName",
          }
        ]).then(response => {
          const departmentName = response.departmentName;
          addDepartment(departmentName).then(() => {
            console.log("Department added successfully!");
            start();
          });
        });
        break;

      case "Add Role":
        break;

      case "Add Employee":
        break;

      case "Update Employee Role":
        break;

      case "Exit":
        console.log("Exiting the application.");
        connection.end();
        break;
      
      default:
        console.log("Invalid option. Please choose a valid option.");
        start();
    }
  });
}

start();