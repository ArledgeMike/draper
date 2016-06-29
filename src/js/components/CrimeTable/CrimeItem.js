import React from "react";

export default class CrimeItem extends React.Component{

    constructor(){
        super();
    }
    render(){
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.department}</td>
                <td>{this.props.employee_annual_salary}</td>
                <td>{this.props.job_titles}</td>
            </tr>
        )

    }

}
