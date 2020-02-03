function EmpManagementReducer(state=[],action){
    switch(action.type){
        case "ADD_EMPLOYEE" :
            state= state.concat(action.employee);
            return state;
            case "ADD_DEPARTMENT" :
            state= state.concat(action.department);
            return state;
        case "DELETE_EMPLOYEE" :
            state = state.filter((employee)=> employee.id !==action.id )
            return state;
        case "FETCH_EMPLOYEES" :
            return action.employees;
        case "FETCH_DEPARTMENTS" :
            return action.departments;
        default :
            return state;
    }
}

export default EmpManagementReducer;