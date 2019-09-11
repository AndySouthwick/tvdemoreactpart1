import React, {Component} from 'react'
import SideNav from '../../components/sideNav'
import PropTypes from 'prop-types'
import './index.css'
class ManagePage extends Component {
    state = {
      nameInProgress: '',
      ratingInProgress: '',
      imgInProgress: ''
    }
    renderShows = () => {
        return this.props.tvShows.map((show, i) => {
            return <SideNav key={i} name={show.name}/>
        })
    }
    update = (tvShow) => {
        this.props.saveTvShow(tvShow)
        this.setState({
            nameInProgress: '',
            ratingInProgress: '',
            imgInProgress: ''
        })
    }

    render(){
        console.log(this.state)
        return(
           
            <div className="container">
                <div>
                {this.renderShows()}
                </div>
                <div>
            
                    <input type="text" value={this.state.nameInProgress} onChange={(e)=> {
                        this.setState({
                                nameInProgress: e.target.value,
                        })
                    }} placeholder="Show Name"/>

                    <input type="text"  value={this.state.ratingInProgress} onChange={(e)=> {
                        
                         this.setState({
                                ratingInProgress: e.target.value,
                        })
                    }} placeholder="show rating"/>
                    
                    <input type="text"  value={this.state.imgInProgress} onChange={(e)=> {
                         this.setState({
                            imgInProgress: e.target.value
                        })
                    }} placeholder="image url"/> 
                    <button onClick={() => {this.update({
                        name: this.state.nameInProgress,
                        img: this.state.imgInProgress,
                        rating: this.state.ratingInProgress
                    })}}>Create/Update Show</button>
                    
                </div>
            </div>
        )
    }
}
ManagePage.propTypes = {
title: PropTypes.string
}
export default ManagePage