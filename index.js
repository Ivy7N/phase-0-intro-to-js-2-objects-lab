function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   
    employee[key] = value;
    return employee;
  }
function deleteFromEmployeeByKey(employee, key) {
    
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee[key];
    return employee;
  }

  const employee = {
    name: 'John',
    age: 30,
    department: 'HR',
  };
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'age', 31);
  console.log(updatedEmployee);
  
  const destructiveUpdate = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Bob');
  console.log(destructiveUpdate);
  
  const deletedEmployee = deleteFromEmployeeByKey(employee, 'department');
  console.log(deletedEmployee);
  
  const destructiveDelete = destructivelyDeleteFromEmployeeByKey(employee, 'age');
  console.log(destructiveDelete);
  