const employee = {
    name : "Sam",
    streetAddress : "adress",

};

function destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee[key];
    return employee;
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newemployee = { ...employee}; 
     newemployee[key] = value; 
     return newemployee;
}
function  deleteFromEmployeeByKey(employee, key){
   
        const newemployee = { ...employee}; 
    delete newemployee[key];
    return newemployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
      employee[key]=value;
      return employee;


  
}



