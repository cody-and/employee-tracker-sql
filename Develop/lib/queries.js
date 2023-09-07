const connection = require("../config/connection");

function listAllDepartments() {
  return connection.promise().query("SELECT department.id, department.name FROM department;");
}

function listAllRoles() {
  return connection.promise().query("SELECT role.id, role.title, role.salary, department.name AS department FROM role INNER JOIN department ON role.department_id = department.id;");
}

function listAllEmployees() {
  return connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, role.salary, department.name AS department FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id;");
}

function addDepartment(departmentName) {
  return connection.promise().query("INSERT INTO department (name) VALUES (?)", [departmentName]);
}

function addRole(title, salary, departmentId) {
  return connection.promise().query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [title, salary, departmentId]);
}

function addEmployee(firstName, lastName, roleId, managerId) {
  return connection.promise().query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [firstName, lastName, roleId, managerId]);
}

function updateEmployeeRole(employeeId, roleId) {
  return connection.promise().query("UPDATE employee SET role_id = ? WHERE id = ?", [roleId, employeeId]);
}

module.exports = {
  listAllDepartments,
  listAllRoles,
  listAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
