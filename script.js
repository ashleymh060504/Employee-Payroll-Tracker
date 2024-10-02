// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  const employeesArray = []; // Array to hold employee objects
  let collectEmployees = true; // Control variable for the loop

  while (collectEmployees) {
      // Prompt for employee details
      const firstName = prompt("Enter the employee's first name:");
      const lastName = prompt("Enter the employee's last name:");
      let salary = prompt("Enter the employee's salary:");

      // Convert salary to a number and handle invalid input
      salary = isNaN(salary) ? 0 : Number(salary);

      // Create an employee object
      const currentEmployee = {
          firstName: firstName,
          lastName: lastName,
          salary: salary
      };

      // Add the employee object to the array
      employeesArray.push(currentEmployee);

      // Ask if the user wants to add another employee
      const addAnother = prompt("Do you want to add another employee? (yes/no)").toLowerCase();
      if (addAnother !== 'yes') {
          collectEmployees = false; // Exit the loop
      }
  }

  return employeesArray; // Return the array of employee objects
};

// Example of using the function
const employeeList = collectEmployees();
console.log(employeeList);
  // TODO: Get user input to create and return an array of employee objects

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
