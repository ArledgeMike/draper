import React from "react";
import { Link } from "react-router";

export default class NavigationLink extends React.Component{
    constructor(){
        super();
        this.state={
           active:false
        };
    }
    renderActiveClass(){
        var pagePath = this.props.pagePath;
        var pageUrl = "/" + this.props.linkPath;

        if(pagePath == pageUrl){
            return "active"
        }
    }
    toggleCollapse(){
        this.props.toggleCollapse();
    }
    render(){


        return (
         <li class={this.renderActiveClass()} ><Link to={this.props.linkPath} key={this.props.key} onClick={this.toggleCollapse.bind(this)} >{this.props.linkPath.toUpperCase()} </Link></li>
                  
        )
    }   
}
