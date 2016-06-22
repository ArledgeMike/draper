import React from "react";

import TodoItem from './TodoList/TodoItem';
import TodoListStore from "../stores/TodoListStore";

import * as TodoListActions from "../actions/TodoListActions";

export default class TodoList extends React.Component{
    constructor(){
        super();
      console.log(this);
      this.state={
          todos : TodoListStore.getAll(),
          inputValue :""
      }
    }

    componentWillMount(){
        var t = this;
        TodoListStore.on("change", function(){
               t.setState({
                   todos:TodoListStore.getAll()
               })
        })
    }
    createTodo(){
        TodoListActions.createTodo(this.state.inputValue);
    }
    handleChange(e){
        this.setState({inputValue: e.target.value})
    }
    submitHandler(){
        console.log(this.state)
    }
    render(){
          console.log(this.state);
        var todoList = this.state.todos.map((todo, i) =>{  
            return <TodoItem key={todo.id} text={todo.text} status={todo.complete} />

        } );
        return (
         
           <div>
           {todoList}
           <button onClick={this.createTodo.bind(this)} >Reload Todos</button>
           <input onChange={this.handleChange.bind(this)} value={this.state.inputValue}/>
           </div>
           
        )
    }   
}
