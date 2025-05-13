'use strict';
const John = {
  name: 'John',
  position: 'Owner',
  daysOfWeekWorking: ['M', 'T', 'W', 'Th', 'F'],
};
const Michael = {
  name: 'Michael',
  position: 'Clerk',
  daysOfWeekWorking: ['M', 'W'],
};
const Shawn = {
  name: 'Shawn',
  position: 'Developer',
  daysOfWeekWorking: ['T', 'Th'],
};
const Bob = {
  name: 'Bob',
  position: 'Accountant',
  daysOfWeekWorking: ['M', 'W', 'F'],
};
const business = {
  opens: '9am',
  closes: '5pm',
  totalEmployees: 4,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: { John, Michael, Shawn, Bob },
};
function addWeekends() {
  business.daysOpen = [...business.daysOpen, 'Sa', 'Su'];
  for (const e in business.employees) {
    const currentEmployee = business.employees[e];
    currentEmployee.daysOfWeekWorking = [
      ...currentEmployee.daysOfWeekWorking,
      'Sa',
      'Su',
    ];
  }
}
function checkIfFullTime(obj) {
  if (obj.daysOfWeekWorking.length >= 5) {
    Object.defineProperty(obj, 'fullTime', { value: true });
    return true;
  } else {
    Object.defineProperty(obj, 'fullTime', { value: false });
    return false;
  }
}
async function addEmployees() {
  try {
    const source = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!source.ok) {
      throw new Error(`HTTP Error! Status: ${source.status}`);
    }
    const data = await source.json();
    const emp0 = {
      name: data[0].name,
      daysOfWeekWorking: ['Th', 'F', 'Sa', 'Su'],
    };
    checkIfFullTime(emp0);
    const emp1 = {
      name: data[1].name,
      daysOfWeekWorking: ['T', 'W', 'Th', 'F', 'Sa'],
    };
    checkIfFullTime(emp1);
    const emp2 = {
      name: data[2].name,
      daysOfWeekWorking: ['M', 'Sa', 'Su'],
    };
    checkIfFullTime(emp2);
    const emp3 = {
      name: data[3].name,
      daysOfWeekWorking: ['M', 'T', 'W', 'Th', 'Su'],
    };
    checkIfFullTime(emp3);
    const nEmp = [emp0, emp1, emp2, emp3];
    for (let i = 0; i < 4; i++) {
      const currentEmployee = nEmp[i];
      business.employees[currentEmployee.name] = currentEmployee;
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
function deleteEmployee(n) {
  delete business.employees[n];
}
document.addEventListener('DOMContentLoaded', () => {
  addWeekends();
  for (const e in business.employees) {
    const currentEmployee = business.employees[e];
    checkIfFullTime(currentEmployee);
  }
  addEmployees();
  deleteEmployee('Bob');
  console.log('Our Company: ', business);
  console.log('Our Team: ', business.employees);
});
