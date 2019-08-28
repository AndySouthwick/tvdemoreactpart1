import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './index.css'
class SideNav extends Component{

     deleteButton = () => {
       if(this.props.allowDelete){
           return(
               <button onClick={this.props.click}>-</button>
           )
       }
    }

    render(){
        return(
            <div className="side-nav">
                <div>
                
                <h3>{this.deleteButton()}{this.props.title}</h3>

                </div>
                
                <p>{this.props.rating}</p>
                <button onClick={this.clicked}>
                </button>
            </div>
        )
    }
}
SideNav.propTypes = {
    title: PropTypes.string,
    allowDelete: PropTypes.bool
}
export default SideNav