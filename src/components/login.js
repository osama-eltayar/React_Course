import React, { Component } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default class Register extends Component {
    
    render() {
        return (
            <div className="container">
                   <Form></Form>
            </div>
        )
    }
}

class Form extends Component {
    constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  handleChange = (event)=>{
    const target = event.target;
    const value = target.type === "checked" ? target.value : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });

  }
  submitData(event) {
     event.preventDefault();
    
    console.log(this.state.userName);
    console.log(this.state.password); 

    fetch('http://todoapp.ahmedrohym.com/api.php?apicall=login', {
        method: 'POST',
        headers: {   
             Accept: 'application/json',   
        },
        body: JSON.stringify({
            username: this.state.userName,
            password: this.state.password,

        }),
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
       
    })
    .catch((error) => {
      console.error(error);
    });
  }
    
    render() {
        return (
            <form onSubmit={this.submitData} ref={this.form} className="p-3">
                <h1 className="text-center pb-2"> register </h1>
                <div className="form-group row">
                    <label htmlFor="user_name" className="col-sm-2 col-form-label">user name</label>
                    <div className="col-sm-10">
                        <input value={this.state.userName} onChange={this.handleChange} type="text" name="userName" className="form-control" id="user_name" ></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">password</label>
                    <div className="col-sm-10">
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="password" ></input>
                    </div>
                </div>
                <div className="form-group text-center row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </div>
                
            </form>
      
        )
    }
}