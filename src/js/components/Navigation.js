import React from "react";
import { Link } from "react-router";

import NavigationLink from './Navigation/NavigationLink';

export default class Navigation extends React.Component{
    constructor(){
        super();
        this.state={
            collapsed: true
        };
    }

    toggleCollapse(){
        var collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }
 
    render(){
        var collapsed = this.state.collapsed;
        var navClass = collapsed ? "collapse" : "";
        
        var location  = this.props.location;
        var urlPath = location.pathname;
        
        var links = ["todo","about", "services", "contact"].map((link, i) => <NavigationLink linkPath={link} key={i} pagePath={urlPath} toggleCollapse={this.toggleCollapse.bind(this)} />  );

        return (
         
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" onClick={this.toggleCollapse.bind(this)}>
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand" activeClassName="active">Start Bootstrap</Link>
                    </div>
                    <div class={"navbar-collapse "  + navClass } id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                           {links}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }   
}
