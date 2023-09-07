function displayAllDepartments(data) {
  console.log("\nList of Departments:");
  console.table(data);
}

function displayAllRoles(data) {
  console.log("\nList of Roles:");
  console.table(data);
}

function displayAllEmployees(data) {
  console.log("\nList of Employees:");
  console.table(data);
}

module.exports = {
  displayAllDepartments,
  displayAllRoles,
  displayAllEmployees,
};
