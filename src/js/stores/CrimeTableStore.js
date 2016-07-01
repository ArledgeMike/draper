import {EventEmitter} from "events";

import dispatcher from "../dispatcher";

class CrimeTableStore extends EventEmitter{
    constructor(){
        super();

        this.crimes = [];
        this.loading = false;

    }
    getAllCrimes(){
        return this.crimes;
    }
    pageUp(page){

    }
    
    pageDown(page){

    }
    
    getCrimes(crimes){
        
            this.crimes = crimes;
            this.emit("change");
       
    }
    fetchingCrimes(loading_status){

         this.loading = loading_status;
         this.emit("change");
    }
    getLoadingStatus(){
        return this.loading;
    }

    //THIS IS FOR WHEN EVENTS COME IN TO THE STORE SO WE CAN CHANGE THE STORE DATA 
    handleAction(action){
        switch(action.type){
            case "GET_INITIAL_DATA":{
                this.getInitialData();
            };
            case "GET_CRIMES":{
                this.getCrimes(action.crimes);
            }
            case "FETCHING_DATA":{
                this.fetchingCrimes(action.loading);
            }
        }
    }

}


var crimeTableStore = new CrimeTableStore;
dispatcher.register(crimeTableStore.handleAction.bind(crimeTableStore));

export default crimeTableStore;