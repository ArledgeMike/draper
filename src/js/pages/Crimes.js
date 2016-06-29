import React from "react";

import CrimeTable from "../components/CrimeTable";
import CrimeTabletStore from "../stores/CrimeTableStore";

export default class Crimes extends React.Component{
    constructor(){
        super();
    }
  
    render(){

        return (
            <div class="container">
           <h1> crimes page</h1>
           <CrimeTable />
            </div>
         )
       
         
    }
    
}

