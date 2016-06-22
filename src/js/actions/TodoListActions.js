import dispatcher from "../dispatcher";

export function createTodo(text){
    $.getJSON("https://data.cityofchicago.org/resource/tt4n-kn4t.json",(data)=>{
        console.log("the data from api",data)
    })
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text:text
    });
}

export function deleteTodo(id){
    dispatcher.dispatch({
        type:"DELETE_TODO",
        id:id
    })
}

export function reloadTodos(){

}