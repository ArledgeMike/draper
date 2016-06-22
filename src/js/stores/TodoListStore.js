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
    getAll(){
        return this.todos;
    }
    handleAction(action){
        console.log(action)
        switch(action.type){
            case "CREATE_TODO":{
                this.createTodo(action.text)
            }
        }
    }

}

var todoStore = new TodoListStore;
dispatcher.register(todoStore.handleAction.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;