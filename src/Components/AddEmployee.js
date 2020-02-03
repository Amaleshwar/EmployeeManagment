import React  from 'react';
import axios from 'axios';

import {connect} from 'react-redux'

 class AddEmployee extends React.Component{

    constructor(){
        super();
        this.state={
            id:'',
            fname:'',
            lname:'',
            age:'',
            email:'',
            departmentid:'',

        }

    }

    componentWillMount(){
        axios.get('http://localhost:3000/Department')
        .then(response =>{
            this.props.dispatch({
                type:'FETCH_DEPARTMENTS',
                departments:response.data
            });

        })
        .catch(error => {
            console.log(error);
        })
    }

    changeid(event){
        this.setState({id:event.target.value})
    }
    changefname(event){
        this.setState({fname:event.target.value})
    }
    changelname(event){
        this.setState({lname:event.target.value})
    }
    changeage(event){
        this.setState({age:event.target.value})
    }
    changeemail(event){
        this.setState({email:event.target.value})
    }
    changedeptid(event){
        this.setState({departmentid:event.target.value})
    }

    addemployee(event){
        event.preventDefault();
        let data={
            "id":this.state.id,
            "fname":this.state.fname,
            "lname":this.state.lname,
            "age":this.state.age,
            "email":this.state.email,
            "departmentid":this.state.departmentid,
        };

        axios.post('http://localhost:3000/Employee',data)
        .then(response =>{
            if(response.status===201){
                this.refs.addemployeeForm.reset();
                this.props.dispatch({
                    type:'ADD_EMPLOYEE',
                    employee:response.data
                });
                
            }
            console.log(response.status);
            
        })
        .catch(error => {
            console.log(error);
        })
    }


    render(){
        return(
            <form onSubmit={(e)=>this.addemployee(e)} ref="addemployeeForm" autocomplete="off" >
                    <div className="form-group">
                        <label>Enter the ID:</label>
                        <input type='text' name="id" onChange={(e)=>this.changeid(e)} className="form-control" /> 
                        </div>
                        <div className="form-group">
                        <label>Enter First Name:</label>
                        <input type='text' name="fname" onChange={(e)=>this.changefname(e)} className="form-control" /> 
                        </div>
                        <div className="form-group">
                        <label>Enter Last Name:</label>
                        <input type='text' name="lname" onChange={(e)=>this.changelname(e)} className="form-control" /> 
                        </div>
                        <div className="form-group">
                        <label>Enter Age:</label>
                        <input type='text' name="age" onChange={(e)=>this.changeage(e)} className="form-control" /> 
                        </div>
                        <div className="form-group">
                        <label>Enter Email:</label>
                        <input type='text' name="email" onChange={(e)=>this.changeemail(e)} className="form-control" /> 
                        </div>
                        <div className="form-group">
                        <label>Enter DepartmentID:</label>
                        {/* <input type='text' name="DeptID" onChange={(e)=>this.changedeptid(e)} className="form-control" />  */}
                        <input type='text' name="DeptID" list="departments" onChange={(e)=>this.changedeptid(e)} className="form-control" />
                            <datalist id="departments" >
                            {this.props.departments.EmpManagementReducer.map((department,index) => <option key={index} value={department.name} />)}
                            </datalist>
                        </div>
                        <div className="form-group text-center">
                        <button type='submit'  className="btn btn-primary" onSubmit={(e)=>this.addemployee(e)} >Add Employee </button>
                        </div>
                </form>
        )
    }

}
const mapStateToProps =(state) =>{
    return{
        departments:state 
    }
};


export default  connect(mapStateToProps)(AddEmployee);


