import React from "react";

import TodoItem from './TodoList/TodoItem';
import TodoListStore from "../stores/TodoListStore";

import * as TodoListActions from "../actions/TodoListActions";

export default class TodoList extends React.Component{
    constructor(){
        super();

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
    deleteTodo(id){
        console.log(id);
        TodoListActions.deleteTodo(id)
    }
    handleChange(e){
        this.setState({inputValue: e.target.value})
    }
    submitHandler(){
        console.log(this.state)
    }
    render(){
          console.log(this.state);
          var t = this;
        var todoList = this.state.todos.map((todo, i) =>{  
            console.log(this.deleteTodo)
            return <TodoItem key={todo.id} todoID={todo.id} text={todo.text} status={todo.complete} deleteTodo={t.deleteTodo.bind(this)} />

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
