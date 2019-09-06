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
        console.log(this.props.name)
        return(
            <div className="side-nav">
                <div>
                
                <h3>{this.deleteButton()}</h3>

                </div>
                
                <p>{this.props.show}</p>
                <button onClick={this.props.showClicked}>
                {this.props.name}
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