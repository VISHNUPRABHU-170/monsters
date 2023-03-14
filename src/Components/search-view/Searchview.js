import { Component } from "react";
import './Searchview.css'

class Searchview extends Component{
    render(){
        return(
            <div>
               <input
                className="search-box"
                type={this.props.type}
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
               />
            </div>
        )
    }
}

export default Searchview;