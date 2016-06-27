import {EventEmitter} from "events";

import dispatcher from "../dispatcher";
class CrimeTableStore extends EventEmitter{
constructor(){
    super();
}
getInitialData(){
    var initData;
    $.getJSON("https://data.cityofchicago.org/resource/tt4n-kn4t.json",(data)=>{
        console.log("the data from api",data)
        initData = data
    })
    dispatcher.dispatch({
        type: "Get_INITIAL_DATA",
        data:initData

    })
}
handleAction(action){
    switch(action.type){
        case "GET_INITIAL_DATA":{
            this.getInitialData();
        }
    }
}

}


var crimeTableStore = new CrimeTableStore;
dispatcher.register(crimeTableStore.handleAction.bind(crimeTableStore));

export default crimeTableStore;