import React, { Component } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default class Home extends Component {
    
    render() {
        return (
            <div>
                <Container></Container>
            </div>
        )
    }
}


class Container extends Component {
     constructor() {
         super();
         this.state = {
          ourlist :[
              "firstTask",
          ]
      };  
     }
    addToList = (task)=>{
        console.log(task);
        this.setState({ourlist:this.state.ourlist.concat(task)})
        console.log(this.state.ourlist);
        

    }

    removeTask = (taskId)=>{
        console.log(taskId);
        // removeElement(this.state.ourlist, taskId);
        this.state.ourlist.splice(taskId, 1);
        
        this.setState({ourlist:this.state.ourlist})
        
    }

   
    render() {
        return (
            <div className="container bg-light my-5 text-center">
                <List removeTask={this.removeTask} newlist ={this.state.ourlist} ></List>
                <NewTask  addTask={this.addToList}></NewTask>
            </div>
        )
    }
}

class List extends Component {
    removeTask = (taskId)=>{
        console.log(taskId);
        this.props.removeTask(taskId)
    
    } 
    render() {
         console.log(this.props.newlist);
        return (  
            <div className="pt-3 ">       
                {this.props.newlist.map((task, i) => (
                <Task removeTask={this.removeTask} key={i} id={i} data={task} />
                ))}           
            </div>
        )
    }
}

class Task extends Component {
    delete = ()=>{
        console.log(this.props.id);
        this.props.removeTask(this.props.id)
    }
    done = ()=>{
        console.log(this.props.id);
    }

    render() {
        return (
            <div id={this.props.id} className = "bg-info row col-11 pt-1 pb-1 my-2 mx-1 rounded">
                <h3 className = "col-6 ">{this.props.data}</h3>
                <div className="d-flex justify-content-end mr-1 col-5 my-1 ">
                    <button onClick={this.delete} className=" mx-1 btn btn-danger btn-sm">X</button>
                    <button onClick={this.done} className="  btn btn-success btn-sm">Y</button>
                </div>
            </div>
        )
    }
}

class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            mytask : "",
        };
    }

    updateState = (e)=>{
        this.setState({mytask : e.target.value })
    }

    addButtun = ()=>{
        this.props.addTask(this.state.mytask)
    }

    render() {
        return (
            <div className="row ">
                <div className = "col-8 ml-1 mb-3">
                    <input 
                    className = "form-control"
                    type="text"
                    value = {this.state.mytask}
                    onChange={this.updateState}
                    />
                </div>
                <div className=" mb-3    col-3" >
                    <button className="btn btn-outline-dark px-5   " onClick={this.addButtun}>ADD Task</button>
                </div>
                
            </div>
        )
    }
}


