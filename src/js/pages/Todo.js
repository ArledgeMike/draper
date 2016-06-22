import React from "react";

import TodoList from "../components/Todolist";


export default class Todo extends React.Component{
    constructor(){
        super();
    
    
    }
  
    render(){
    
        return (
            <div class="container">
               <TodoList />
            </div>
        )
    }
}
