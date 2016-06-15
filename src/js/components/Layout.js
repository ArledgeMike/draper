import React from "react";

import Header from "./Header";
import Footer from "./Footer";


export default class Layout extends React.Component{
    constructor(){
        super();
       
        this.state= {
            title:"Draper"
        }
    }
    changeTitle(title){
        this.setState({title:title})
    }
    render(){
         console.log("from layout ")
    var self = this;
    //setTimeout(() =>{ this.setState({name: "Bob"}) }  )
   console.log("we are up now");
        return (
          
            <div>
            {this.state.name}
            <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)} />
            <Footer />
            </div>
         )
       
         
    }
    
}

