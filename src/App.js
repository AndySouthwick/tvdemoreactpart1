import React, {Component} from 'react';
import './App.css';
import ManagePage from './pages/managePage/managePage'
import PreviewPage from './pages/previewPage/previewPage'
import Navigation from './components/navigation/'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CreateList from './pages/mapandspread'
class App extends Component {
  state = {
    tvShows: []
  }
  componentDidMount() {
    fetch('http://localhost:3001')
    .then(res => res.json())
    .then(tvShows => {
      this.setState({
        tvShows
      })
    })
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
    console.log(showToSave)
        fetch('http://localhost:3001', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(showToSave)
        }).then(response => response.json())
          .then(data => {
            this.setState({
              tvShows: data
            })
          })

      // this.setState((prevState) => ({
      //   tvShows: [...prevState.tvShows, showToSave]
      // }))
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
