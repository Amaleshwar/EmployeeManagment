import React  from 'react';
import axios from 'axios';
import App from '../App';
import {connect} from 'react-redux'

 class AddDepartment extends React.Component{

    constructor(){
        super();
        this.state={
            id:'',
            name:''
        }

    }

    changeid(event){
        this.setState({id:event.target.value})
    }
    changefname(event){
        this.setState({name:event.target.value})
    }


    adddepartment(event){
        event.preventDefault();
        let data={
            "id":this.state.id,
            "name":this.state.name
        };

        axios.post('http://localhost:3000/Department',data)
        .then(response =>{
            if(response.status===201){
                this.refs.adddepartmentForm.reset();
                this.props.dispatch({
                    type:'ADD_DEPARTMENT',
                    deaprtment:response.data
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
            <div>
                <App/>
            <form onSubmit={(e)=>this.adddepartment(e)} ref="adddepartmentForm">
                    <div className="form-group col-lg-4">
                        <label>Enter the ID:</label>
                        <input type='text' name="id" onChange={(e)=>this.changeid(e)} className="form-control" /> 
                        </div>
                        <div className="form-group col-lg-4">
                        <label>Enter Name:</label>
                        <input type='text' name="fname" onChange={(e)=>this.changefname(e)} className="form-control" /> 
                        </div>
                        <div className="form-group mx-4">
                        <button type='submit'  className="btn btn-primary" onSubmit={(e)=>this.adddepartment(e)} >Add Department </button>
                        </div>
                </form>
                </div>
        )
    }

}



export default  connect()(AddDepartment);