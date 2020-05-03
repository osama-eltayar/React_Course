import React, { Component } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default class Register extends Component {


    
    render() {
        return (
            <div className="container bg-light">
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
      email: "",
      password: "",
      gender: "male"
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
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.gender); 

    fetch('http://todoapp.ahmedrohym.com/api.php?apicall=signup', {
        method: 'POST',
        headers: {   
             Accept: 'application/json',   
        },
        body: JSON.stringify({
            username: this.state.userName,
            password: this.state.password,
            email: this.state.email,
            gender: this.state.gender

        }),
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json.message);
       
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
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="email" placeholder="Email"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">password</label>
                    <div className="col-sm-10">
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="password" ></input>
                    </div>
                </div>
                
                 <fieldset className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">gender</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" onChange={this.handleChange} type="radio" name="gender" id="male"  value="male"  ></input>
                                <label className="form-check-label" htmlFor="male">
                                    male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" onChange={this.handleChange} type="radio" name="gender" id="female"  value="female" ></input>
                                <label className="form-check-label" htmlFor="female">
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="form-group text-center row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Sign up</button>
                    </div>
                </div>
                
            </form>
      
        )
    }
}