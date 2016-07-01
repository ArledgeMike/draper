import React from "react";

import CrimeItem from "./CrimeTable/CrimeItem";
import CrimeTableStore from "../stores/CrimeTableStore";
import * as CrimeTableActions from "../actions/CrimeTableActions";

export default class CrimeTable extends React.Component{

    constructor(){
        super();
        this.setCrimeState = this.setCrimeState.bind(this);
        this.props ={
            pagination:35
        }
        this.state={
            crimes:[],
            loading:false
        }

    }

    componentDidMount(){
   
          //  console.log("did mount call")
          // CrimeTableActions.getData();
  
    }
    componentWillMount(){
     
     
        CrimeTableStore.on("change", this.setCrimeState);
    }
    componentWillUnmount(){
             CrimeTableStore.removeListener("change", this.setCrimeState);
    }
    setCrimeState(){
        this.setState({
            crimes:CrimeTableStore.getAllCrimes(),
            loading:CrimeTableStore.getLoadingStatus()
        });
    }
    getCrimes(){


  

  CrimeTableActions.getData();
   
    }
    render(){
var icon = this.state.loading ? "\u2714" : "\u2716";

        var crimeItems = this.state.crimes.map((crime, i) =>{
        return    <CrimeItem key={i} name={crime.name} department={crime.department} employee_annual_salary={crime.employee_annual_salary} job_titles={crime.job_titles} />
       });
   

        return(
            
            <div>Crimes<p>Loading{icon}</p>
            <button class="btn btn-success" onClick={this.getCrimes.bind(this)}>Load Jobs</button>
            <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Annual Salary</th>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>
         {crimeItems}
                </tbody>
            </table>
            </div>
        )

    }

} 