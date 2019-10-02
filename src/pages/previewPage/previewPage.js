import React, {Component} from 'react'
import SideNav from '../../components/sideNav'
import{client}from './../../client'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_TV_SHOWS = gql`
{ allTvShowses @client {
    id 
    name
    rating 
    imgUrl 
    } 
}`

class PreviewPage extends Component {
    render(){
        return(
            <Query query={GET_TV_SHOWS}>
            {({ loading, error, data }) => {
           if (loading) return 'Loading...';
           if (error) return `Error! ${error.message}`;
           return data.allTvShowses.map((show, i) => {
            return <SideNav key={i} name={show.name}/>
        })
               
                 }}
            </Query>
        )
    }
}
export default PreviewPage