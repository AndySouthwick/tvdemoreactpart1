import React, {Component} from 'react'
import SideNav from '../../components/sideNav'
import PropTypes from 'prop-types'
class ManagePage extends Component {
    state = {
        name: '',
        addNumber: 1
    }

    deleteClicked = () => {
        console.log('deleted')
    }
    addNumber = (number) => {
        this.state.addNumber++
      
       this.setState({
           addNumber: this.state.addNumber++
       })
    }
    render(){
        console.log(this.state)
        return(
           
            <div>
                {this.state.name}
                <SideNav title={"this is a title"} rating="5" allowDelete={true} click={this.deleteClicked}/>
              
                <button onClick={()=>{this.addNumber()}}>add the number</button>
               
                <input type="text"  onChange={(e) => {
                    this.setState({
                        name: e.target.value
                    })
                }}/>
            </div>
        )
    }
}
ManagePage.propTypes = {
title: PropTypes.string
}
export default ManagePage