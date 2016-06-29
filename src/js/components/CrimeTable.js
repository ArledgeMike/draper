import React from "react";

import CrimeItem from "./CrimeTable/CrimeItem";
import CrimeTableStore from "../stores/CrimeTableStore";
import * as CrimeTableActions from "../actions/CrimeTableActions";

export default class CrimeTable extends React.Component{

    constructor(){
        super();
        this.props ={
            pagination:35
        }
        this.state={
            crimes:[],
            loading:false
        }

    }

    componentDidMount(){
        console.log("component did mount!!!")
   
    }
    componentWillMount(){
        var t = this;
        CrimeTableStore.on("change", function(){
            console.log("heard a store change")
                t
                .setState({
                    crimes:CrimeTableStore.getAllCrimes()
                });
                console.log(t)
        });
    }
    componentWillUnmount(){
      //  CrimeTableStore.removeListener("change");
    }
    getCrimes(){


        console.log("get crimes")

  CrimeTableActions.getData();
   
    }
    render(){
  console.log(this.props.pagination);
        var crimeItems = this.state.crimes.map((crime, i) =>{
        return    <CrimeItem key={i} name={crime.name} department={crime.department} employee_annual_salary={crime.employee_annual_salary} job_titles={crime.job_titles} />
       });
        console.log(crimeItems)

        return(
            
            <div>Crimes
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