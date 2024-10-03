const addEmployeesBtn = document.querySelector('#add-employees-btn');

const collectEmployees = function () {
  const employeesArray = []; 
  let collectEmployees = true; 

  while (collectEmployees) {
      const firstName = prompt("Enter the employee's first name:");
      const lastName = prompt("Enter the employee's last name:");
      let salary = prompt("Enter the employee's salary:");

      salary = Number(salary);
      if (isNaN(salary) || salary < 0) {
          salary = 0;
      }

      const currentEmployee = {
          firstName: firstName,
          lastName: lastName,
          salary: salary
      };

      employeesArray.push(currentEmployee);

      const addAnother = prompt("Do you want to add another employee? (yes/no)").toLowerCase();
      if (addAnother !== 'yes') {
          collectEmployees = false; 
      }
  }

  return employeesArray; 
};

const displayAverageSalary = function (employeesArray) {
    if (employeesArray.length === 0) {
        console.log("No employees to calculate the average salary.");
        return;
    }

    let totalSalary = 0;
    for (let i = 0; i < employeesArray.length; i++) {
        totalSalary += employeesArray[i].salary;
    }

    const averageSalary = totalSalary / employeesArray.length;

    console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary.toFixed(2)}`);
}

const getRandomEmployee = function (employeesArray) {
    if (employeesArray.length === 0) {
      console.log("No employees available for random selection.");
      return;
    }
  
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  
  const selectedEmployee = employeesArray[randomIndex];
  
  console.log(`Congratulations to ${selectedEmployee.firstName} ${selectedEmployee.lastName}, our random drawing winner!`);
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
