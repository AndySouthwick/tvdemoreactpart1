import React, {Component} from 'react';
import './App.css';
import ManagePage from './pages/managePage/managePage'
import PreviewPage from './pages/previewPage/previewPage'
import Navigation from './components/navigation/'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CreateList from './pages/mapandspread'
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';





class App extends Component {
  state = {
    tvShows: []
  }

  componentDidMount() {
    
  }

  // renderTvShows = () => {
  //   return <Query query={TV_SHOWS}>
  //    {({ loading, error, data }) => {
  //       if (loading) return 'Loading...';
  //       if (error) return `Error! ${error.message}`;
  //       console.log(data)
  //      cache.writeData({
  //        tvShows: data.allTvShowses
  //      })
  //   }}
  //   </Query>
  // }
  
  saveTVShow = async (showToSave) => {
    try{
       const apiCall = await fetch('http://localhost:3001/tvDemo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(showToSave)
        })
        // console.log(apiCall)
         await apiCall
         await this.renderTvShows()
      } catch(e){
        console.log(e)
      }
  }

  renderManagePage = () => <ManagePage saveTvShow={this.saveTVShow} tvShows={this.state.tvShows}/>
  render(){
    console.log(this.renderTvShows)
  return (
    <Router>
    <div className="App">
      <div className="content-container">
      <Navigation/>
      <Route exact path="/" component={this.renderManagePage} />
      <Route path="/preview-page" component={PreviewPage} />
      <Route path="/list" component={CreateList} />
      </div>
    </div>
    </Router>
  );
}
}

export default App;
