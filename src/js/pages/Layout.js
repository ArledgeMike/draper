import React from "react";
import {Link} from "react-router";

import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default class Layout extends React.Component{
    constructor(){
        super();
    }
   
    render(){
        var location = this.props.location;

        return (
        
            <div>
                <Navigation location={location} />
                <Header />
                {this.props.children}
                <Footer />
            </div>
        ) 
    }
}

