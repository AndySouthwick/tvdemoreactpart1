import React, {Component} from 'react'
import SideNav from '../../components/sideNav'
import PropTypes from 'prop-types'
class ManagePage extends Component {
    deleteClicked = () => {
        console.log('deleted')
    }
    render(){
        return(
            <div>
                <SideNav title={"this is a title"} rating="5" allowDelete={true} click={this.deleteClicked}/>
                {this.props.title}
            </div>
        )
    }
}
ManagePage.propTypes = {
title: PropTypes.string
}
export default ManagePage