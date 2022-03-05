const employee = Object();
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let Object = {...employee };
    Object[key] = value;
    return Object;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};
function deleteFromEmployeeByKey(employee, key) {
    var employee ={
        name: 'Sam'
    };
  console.log(delete employee.name);
    return employee;
};
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}