import dispatcher from "../dispatcher";

export function getData(){
    this.crimeData;
/*    $.getJSON("https://data.cityofchicago.org/resource/tt4n-kn4t.json",(data)=>{
        var crimeData = data;
        console.log("getting data through actions")
        dispatcher.dispatch({
            type: "GET_CRIMES",
            crimes: crimeData
        });
       
    })
 */
 dispatcher.dispatch({
        type:"FETCHING_DATA"
    });
    $.getJSON("https://data.cityofchicago.org/resource/tt4n-kn4t.json").then((data)=>{
        var crimeData = data;
        console.log("getting data through actions")
        dispatcher.dispatch({
            type: "GET_CRIMES",
            crimes: crimeData
    });


    });
}

export function deleteTodo(id){
    dispatcher.dispatch({
        type:"DELETE_TODO",
        id:id
    })
  
}
export function fetchData(){
    dispatcher.dispatch({
        type: "FETCHING_DATA",
        loading:true
    });
}
export function reloadTodos(){
    dispatcher.dispatch({
        type:"RELOAD_TODOS"
    });
}