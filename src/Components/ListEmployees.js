import React  from 'react';
import axios from 'axios';

import {connect} from 'react-redux'

 class EmployeeRow extends React.Component{

    constructor(){
        super();
        this.state={
            
        }
    }

    deleemployeeByID(){
        axios.delete("http://localhost:3000/Employee/"+this.props.employee.id)
        .then((res)=>{ 
            console.log(res.status);
                if(res.status===200){
                    this.props.dispatch({
                        type:'DELETE_EMPLOYEE',
                        id:this.props.employee.id
                    });
                }
        })
        .catch((err)=>{
            console.log(err)
        })
        }
        
 


    render(){

        return(
                    <tr>
                        <td>{this.props.employee.id}</td>
                        <td>{this.props.employee.fname}</td>
                        <td>{this.props.employee.lname}</td>
                        <td>{this.props.employee.age}</td>
                        <td>{this.props.employee.email}</td>
                        <td>{this.props.employee.departmentid}</td>
                        <td>
                        <button type="button" className=" btn btn-danger" onClick={()=>{
        this.deleemployeeByID()
    }}>Delete</button>
                            </td>
                    </tr>

        )

    }

}

export default connect()(EmployeeRow);