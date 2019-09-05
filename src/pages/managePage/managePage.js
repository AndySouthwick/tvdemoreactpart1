import React, {Component} from 'react'
import SideNav from '../../components/sideNav'
import PropTypes from 'prop-types'
import './index.css'
class ManagePage extends Component {
    state = {
      nameInProgress: '',
      ratingInProgress: '',
      imgInProgress: '',
      shows: [ {
        name: 'bbt'
    },
    {
        name: 'chuck'
    }
]
    }
    renderShows = () => {
        let shows = []
        let i = 0

        for(let show of this.state.shows){
            shows.push(<SideNav showObject={show} name={show.name} showClicked={(e) => {
                console.log(e)
                // this.setState({
                //     nameInProgress: 
                // })
            }}/>)
        }
        return shows
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
           
            <div className="container">
                <div>
                {this.renderShows()}
                </div>
                <div>
            
                    <input type="text" value={this.state.nameInProgress} onChange={(e)=> {this.createShow(e)}} placeholder="Show Name"/>
                    <input type="text"  value={this.state.ratingInProgress} onChange={(e)=> {this.createRatingForShow(e)}} placeholder="show rating"/>
                    <input type="text"  value={this.state.imgInProgress} onChange={(e)=> {this.createImgUrl(e)}} placeholder="image url"/>
                    <button>Create/Update Show</button>
                    
                </div>
            </div>
        )
    }
}
ManagePage.propTypes = {
title: PropTypes.string
}
export default ManagePage