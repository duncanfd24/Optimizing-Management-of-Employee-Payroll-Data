// Gets a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
 
// Collects employee data
// Gets user input to create and return an array of employee objects
const collectEmployees = function() {
  const employeesArray = [];
  let addEmployee = true

  while (addEmployee) {
    const firstName = prompt('Enter First name:');
    const lastName = prompt('Enter Last name:');
    const salaryInput = prompt('Enter salary (as a number):');
    const salary = isNaN(Number(salaryInput)) ? 0 : Number (salaryInput);
    
    employeesArray.push({
    firstName: firstName,
    lastName: lastName,
    salary: salary
      
  });
  addEmployee = confirm("Would you like to add another employee?")
};
return employeesArray;
}
  
//Displays the average salary from the employeesArray.
const displayAverageSalary = function(employeesArray) {
  const totalSalaries = employeesArray.reduce((sum, employee) => sum + employee.salary, 0); 
  const averageSalary = totalSalaries / employeesArray.length;
  
if (averageSalary > 0) {
  console.log ('averageSalary:' + averageSalary);
  }
}
// Selects and displays random employee from employeesArray.
const getRandomEmployee = function(employeesArray) {

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex]; 

console.log('Congratulations to,', randomEmployee.firstName, randomEmployee.lastName, ',our random drawing winner!' );
};
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i]; // current employee that we are iterating over in array

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell); // insert data points to table row

    employeeTable.append(newTableRow); // append table tow to html
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);