let employee = {
    name:"Mark",
    streetAdress: '11 Broadway'

}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee ={...employee};
    newEmployee[key]= value;
    return newEmployee;
    
}
updateEmployeeWithKeyAndValue(employee, streetAdress, '11 Broadway');

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee[key] = value;
    return employee;

}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee}
    delete newEmployee.name
    delete newEmployee.streetAddress
    return newEmployee

}

deleteFromEmployeeByKey(employee, 'name')

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    let newEmployee = employee;
    delete newEmployee.name;
    delete newEmployee.streetAddress;

    return employee
    
}
destructivelyDeleteFromEmployeeByKey(employee, 'name')