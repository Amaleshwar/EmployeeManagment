import { combineReducers } from 'redux';

import EmpManagementReducer from './EmpManagementReducer';

 const rootReducer = 
combineReducers({
    EmpManagementReducer,
    // add if you have more reducers after comma(,)
});

export  default rootReducer;