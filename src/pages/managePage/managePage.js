import React, {Component} from 'react'
import SideNav from '../../components/sideNav'
import PropTypes from 'prop-types'
class ManagePage extends Component {
    state = {
      show: {
          name: 'chuck'
      }
    }
    renderShow = (e) => {
        this.setState({
            show: {
                name: e.target.value
            }
        })
    }

    createShow = (e) => {
        this.setState({
            show: {
                rating: this.state.show.rating,
                name: e.target.value,
                img: this.state.show.img
            }
        })
    }
    createRatingForShow = (e) => {
        this.setState({
            show: {
                rating: e.target.value,
                name: this.state.show.name,
                img: this.state.show.img
            }
        })
    }

    updateStateOfShow = (show) => {
        this.setState({
            show: {
                name: show
            }
        })
    }
    createImgUrl = (e) => {
        this.setState({
            show: {
                rating: this.state.show.rating,
                name: this.state.show.name,
                img: e.target.value
            }
        })
    }
    deleteClicked = (name) => {
        console.log('test', name)
    }

    render(){
        console.log(this.state)
        return(
           
            <div>
                {this.state.name}
                <SideNav show={this.state.show} allowDelete={true} showClicked={this.updateStateOfShow}/>
                <input type="text" value={this.state.show.name} onChange={(e)=> {this.createShow(e)}} placeholder="Show Name"/>
                <input type="text"  value={this.state.show.rating} onChange={(e)=> {this.createRatingForShow(e)}} placeholder="show rating"/>
                <input type="text"  value={this.state.show.img} onChange={(e)=> {this.createImgUrl(e)}} placeholder="image url"/>
            </div>
        )
    }
}
ManagePage.propTypes = {
title: PropTypes.string
}
export default ManagePage