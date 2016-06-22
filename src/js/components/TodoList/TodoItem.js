import React from "react";

export default class TodoItem extends React.Component{
    constructor(){
        super();
       
    }


    render(){
        var icon = this.props.status ? "\u2714" : "\u2716";
        return (

         <li key={this.props.key}>{this.props.text} <i>{icon}</i></li>
    
        )
    }   
}
