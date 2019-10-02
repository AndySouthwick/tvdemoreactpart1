import React, {Component} from 'react'
import SideNav from '../../components/sideNav'
import PropTypes from 'prop-types'
import './index.css'
import { gql } from 'apollo-boost';
import { Query, Mutation } from 'react-apollo';
import {client} from './../../client'


const GET_TV_SHOWS = gql`
{ allTvShowses {
    id 
    name
    rating 
    imgUrl 
    }
   
}`

const SAVE_TV_SHOW = gql`
mutation createTvShows($name: String $rating: Int! $imgUrl: String){
        createTvShows(
            name: $name
            rating: $rating
            imgUrl: $imgUrl
        ){
            id
            name
            rating
            imgUrl
        }
}`

class ManagePage extends Component {
    state = {
      nameInProgress: '',
      ratingInProgress: '',
      imgInProgress: ''
    }
    renderShows = () => {

            return <Query query={GET_TV_SHOWS} >
                {({loading, error, data, refetch})=>{
                    if(loading)return 'Loading...';
                    if(error) return `Error! ${error.message}`;
                    client.writeData({data})
                    return data.allTvShowses.map((show, i) => {
                        return <SideNav key={i} name={show.name}/>
                    })
                }}
                </Query>



    //     return <Query query={ GET_TV_SHOWS}>
    //     {({ loading, error, data }) => {
    //        if (loading) return 'Loading...';
    //        if (error) return `Error! ${error.message}`;
    //        console.log(data)
    //        client.writeData({data})
    //        return data.allTvShowses.map((show, i) => {
    //         return <SideNav key={i} name={show.name}/>
    //     })
    //    }}
    //    </Query>
        
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
            <Query className="container" query={ GET_TV_SHOWS}>
                {({loading, error, data, refetch})=> {
                    if(loading)return 'Loading...';
                    if(error) return `Error! ${error.message}`;
                    client.writeData({data})
                    return (
                        <div> 
                            <div>                       
                            {data.allTvShowses.map((show, i) => {
                                return <SideNav key={i} name={show.name}/>
                            })}
                            </div>    
                <Mutation mutation={SAVE_TV_SHOW} refetchQueries={GET_TV_SHOWS}>
                    {(saveTvShow) => (
                    <div>
                        <input type="text" value={this.state.nameInProgress} onChange={(e)=> {
                        this.setState({nameInProgress: e.target.value}) 
                        }} placeholder="Show Name"/>
                    <input type="text"  value={this.state.ratingInProgress} onChange={(e)=> {
                         this.setState({ratingInProgress: Number(e.target.value)})
                    }} placeholder="show rating"/>
                    <input type="text"  value={this.state.imgInProgress} onChange={(e)=> {
                        this.setState({ imgInProgress: e.target.value})
                    }} placeholder="image url"/> 

                    <button onClick={() => {
                        
                        saveTvShow({variables: {
                            name: this.state.nameInProgress,
                            rating: this.state.ratingInProgress,
                            imgUrl: this.state.imgInProgress
                        }})
                        refetch() 
                    }}>Create/Update Show</button>
                    </div>
                    )}
                </Mutation>
                </div>
                    )}}
            </Query>
        )
    }
}
ManagePage.propTypes = {
title: PropTypes.string
}
export default ManagePage