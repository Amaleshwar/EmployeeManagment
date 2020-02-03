import { createStore } from 'redux';

import rootReducer from '../reducers/rootReducer';

let EmpManagementStore = createStore(rootReducer);

export default EmpManagementStore;