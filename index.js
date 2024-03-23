let employee ={
  employeeName: "Sam",
  streetAddress: "11 Broadway"

}
function updateEmployeeWithKeyAndValue(object,key,value){
  employee = {...object};
  employee[key]=value;
  return employee
}

function newUpdateEmployeeWithKeyAndValue(key,value){
  Object.keys(employee)
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key]=value;
return employee
}
function deleteFromEmployeeByKey(employee, key){
var newObj =Object.assign({},employee);
delete newObj[key];
return newObj

}
function destructivelyDeleteFromEmployeeByKey(object,key,value){
object[key]=value
return object
}

