import React, {Component} from 'react'
import SideNav from '../../components/sideNav'
import PropTypes from 'prop-types'
import './index.css'
class ManagePage extends Component {
    state = {
    tvShow: {
      nameInProgress: '',
      ratingInProgress: '',
      imgInProgress: '',
    },
      shows: []
    }
    renderShows = () => {
        return this.state.shows.map((a, i) => {
            return <SideNav key={i} name={a.name}/>
        })

        // let shows = []
        // let i = 0

        // for(let show of this.state.shows){
        //     shows.push(<SideNav  name={show.name} showClicked={(e) => {
        //     }}/>)
        // }
        // return shows
    }
    update = (tvShow) => {
        this.setState((prevState) => ({
            tvShow,
            shows: [...prevState.shows, tvShow]
        })
        )
    }
    // deleteClicked = (name) => {
    //     console.log('test', name)
    // }

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
                            tvShow: {
                                nameInProgress: e.target.value,
                                ratingInProgress: this.state.tvShow.ratingInProgress,
                                imgInProgress: this.state.tvShow.imgInProgress
                            }
                        })
                    }} placeholder="Show Name"/>

                    <input type="text"  value={this.state.ratingInProgress} onChange={(e)=> {
                         this.setState({
                            tvShow: {
                                ratingInProgress: e.target.value,
                                nameInProgress: this.state.tvShow.nameInProgress,
                                imgInProgress: this.state.tvShow.imgInProgress
                            }
                        })
                    }} placeholder="show rating"/>
                    
                    <input type="text"  value={this.state.imgInProgress} onChange={(e)=> {
                         this.setState({
                            tvShow: {
                                imgInProgress: e.target.value,
                                nameInProgress: this.state.tvShow.nameInProgress,
                                ratingInProgress: this.state.tvShow.ratingInProgress,
                            }
                        })
                    }} placeholder="image url"/>
                    <button onClick={() => {this.update(this.state.tvShow)}}>Create/Update Show</button>
                    
                </div>
            </div>
        )
    }
}
ManagePage.propTypes = {
title: PropTypes.string
}
export default ManagePage