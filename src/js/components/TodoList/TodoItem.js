import React from "react";

export default class TodoItem extends React.Component{
    constructor(){
        super();
          

    }
    componentDidMount(){
     console.log(this.props);
    }
    deleteTodo(){
        console.log("from todo", this)
        this.props.deleteTodo(this.props.todoID);
    }
    render(){
        var icon = this.props.status ? "\u2714" : "\u2716";
        console.log(this.props.todoID)
        return (

         <li >{this.props.text} <i onClick={this.deleteTodo.bind(this)}>{icon}</i></li>
    
        )
    }   
}
