import { EventEmitter } from "events";

import dispatcher from "../dispatcher"

class TodoListStore extends EventEmitter{   
    constructor(){
        super();
        this.todos=[
             {
                    id:92658708,
                    text:"Get Birth Certificate",
                    complete:true
                },
                {
                    id:92651908,
                    text:"Get SS card",
                    complete:false
                },{
                    id:19231908,
                    text:"Get your id card",
                    complete:false
                },{
                    id:67231908,
                    text:"Get your passport",
                    complete:false
                }
            ]

    }
    createTodo(text){
        var id = Date.now();
        this.todos.push({
            id:id,
            text:text,
            complete:false
        });
        this.emit("change");
    }
    deleteTodo(id){
        var findID = id;
        this.todos.forEach((todo, index) => {
            console.log(todo.id);
            console.log(findID)
            if(todo.id == findID){
               console.log("found it")
                this.todos.splice(index,1);
            }
        })
           this.emit("change");
    }
    reloadTodos(){
        console.log("we want to reload the todos")
    }
    getAll(){
        return this.todos;
    }
    handleAction(action){
        console.log(action)
        switch(action.type){
            case "CREATE_TODO":{
                this.createTodo(action.text)
            }
            case "DELETE_TODO":{
                this.deleteTodo(action.id)
            }
            case "RELOAD TODOS":{
                this.reloadTodos();
            }
        }
    }

}

var todoStore = new TodoListStore;
dispatcher.register(todoStore.handleAction.bind(todoStore));

export default todoStore;