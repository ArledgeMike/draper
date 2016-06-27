import React from "react";

import CrimeTableStore from "../stores/CrimeTableStore";

export default class CrimeTable extends React.Component{

    constructor(){
        super();
    }
    componentDidMount(){
        var t = this;
        CrimeTableStore.on("change", function(){
                t.setState({
                    crimes:CrimeTableStore.getInitialData()
                })
        })
    }
    render(){

        return(
            <div>crime table</div>
        )

    }

} 