const inquirer = require("inquirer");
const {
  listAllDepartments,
  listAllRoles,
  listAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require("./lib/queries");
const {
  displayAllDepartments,
  displayAllRoles,
  displayAllEmployees,
} = require("./lib/displays");

function start() {
  try {
    inquirer
      .prompt([
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
            "Exit",
          ],
        },
      ])
      .then((response) => {
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
            inquirer
              .prompt([
                {
                  type: "input",
                  message: "Enter the department name:",
                  name: "departmentName",
                },
              ])
              .then((response) => {
                const departmentName = response.departmentName;
                addDepartment(departmentName).then(() => {
                  console.log("Department added successfully!");
                  start();
                });
              });
            break;

          case "Add Role":
            inquirer
              .prompt([
                {
                  type: "input",
                  message: "Enter the role title:",
                  name: "title",
                },
                {
                  type: "input",
                  message: "Enter the role salary:",
                  name: "salary",
                },
                {
                  type: "input",
                  message: "Enter the department ID:",
                  name: "departmentId",
                },
              ])
              .then((response) => {
                const { title, salary, departmentId } = response;
                addRole(title, salary, departmentId).then(() => {
                  console.log("Role added successfully!");
                  start();
                });
              });
            break;

          case "Add Employee":
            inquirer
              .prompt([
                {
                  type: "input",
                  message: "Enter the employee's first name:",
                  name: "firstName",
                },
                {
                  type: "input",
                  message: "Enter the employee's last name:",
                  name: "lastName",
                },
                {
                  type: "input",
                  message: "Enter the employee's role ID:",
                  name: "roleId",
                },
                {
                  type: "input",
                  message: "Enter the employee's manager's ID (leave empty if none):",
                  name: "managerId",
                },
              ])
              .then((response) => {
                const { firstName, lastName, roleId, managerId } = response;
                addEmployee(firstName, lastName, roleId, managerId).then(() => {
                  console.log("Employee added successfully!");
                  start();
                });
              });
            break;

          case "Update Employee Role":
            inquirer
              .prompt([
                {
                  type: "input",
                  message: "Enter the employee's ID whose role you want to update:",
                  name: "employeeId",
                },
                {
                  type: "input",
                  message: "Enter the new role ID for the employee:",
                  name: "newRoleId",
                },
              ])
              .then((response) => {
                const { employeeId, newRoleId } = response;
                updateEmployeeRole(employeeId, newRoleId).then(() => {
                  console.log("Employee's role updated successfully!");
                  start();
                });
              });
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
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

start();
