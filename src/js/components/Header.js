import React from "react"

export default class Header extends React.Component{
    handleChange(e){
        var title = e.target.value;
        this.props.changeTitle(title)
    }
    render(){
        return ( 
            <div>
            <h1>{this.props.title}</h1>
            <input  onChange={this.handleChange.bind(this) } value={this.props.title}/>
             </div>
             )
    }
    
}
