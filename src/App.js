import React, {Component} from 'react';
import './App.css';
import ManagePage from './pages/managePage/managePage'
import PreviewPage from './pages/previewPage/previewPage'
import Navigation from './components/navigation/'
import {BrowserRouter as Router, Route} from 'react-router-dom'
class App extends Component {
  state = {
    tvShows: []
  }

  // saveTVShow = (showToSave) => {
  //   console.log(showToSave)
  //   this.setState(
  //     (prevState) => ({
  //       tvShows: [...prevState.tvShows, {
  //         name: showToSave.name,
  //         rating: showToSave.rating,
  //         imageUrl: showToSave.imageUrl
  //       }]
  //     })
  //   )
  // }

  saveTVShow = (showToSave) => {
      this.setState((prevState) => ({
        tvShows: [...prevState.tvShows, showToSave]
      }))
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
      </div>
    </div>
    </Router>
  );
}
}

export default App;
