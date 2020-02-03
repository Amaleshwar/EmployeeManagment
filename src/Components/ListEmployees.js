import React from 'react';
import axios from 'axios';

import  EmployeeRow from './EmployeeRow';
import {connect} from 'react-redux'


 class ListEmployees extends React.Component{

    componentWillMount(){
        axios.get('http://localhost:3000/Employee')
        .then(response =>{
            this.props.dispatch({
                type:'FETCH_EMPLOYEES',
                employees:response.data
            });

        })
        .catch(error => {
            console.log(error);
        })
    }


    render(){
        return(
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>AGE</th>
                            <th>EMAIL</th>
                            <th>DEPARTMENT ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {this.state.products.map((product,index) => <ProductRow product={product} key={index} />)} */}
                            {this.props.employees.EmpManagementReducer.map((employee,index) => <EmployeeRow employee={employee} key={index} />)}
                         </tbody>
                </table>

        )
    }

}

const mapStateToProps =(state) =>{
    return{
        employees:state 
    }
};

export default connect(mapStateToProps)(ListEmployees);