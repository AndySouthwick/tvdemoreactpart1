import React from 'react'
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const TV_SHOWS = gql` query {
    allTvShows {
      id name imgUrl rating
    }
  }
  `
function renderTvShows(){
    // const { loading, error, data } = useQuery(TV_SHOWS)
    //     if (loading) return <p>Loading...</p>;
    //     if (error) return <p>Error :(</p>;
    //     console.log(data)
    return(
        <div>
            some stuff
        </div>
    )
  }
  export default renderTvShows