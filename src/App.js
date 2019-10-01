import React, {Component} from 'react';
import './App.css';
import ManagePage from './pages/managePage/managePage'
import PreviewPage from './pages/previewPage/previewPage'
import Navigation from './components/navigation/'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CreateList from './pages/mapandspread'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

class App extends Component {
  state = {
    tvShows: []
  }

  componentDidMount() {
      this.renderTvShows()

  }
  TvShows
  renderTvShows = async () => {
 
    // try{
    //   console.log('this ran')
    //   const promise = await fetch('http://localhost:3001/getAllTvShows')
    //   this.setState({
    //     tvShows: await promise.json()
    //   })
    // } catch(err){
    //   console.log(err)
    // }
  }
  
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
    console.log(this.state)
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
