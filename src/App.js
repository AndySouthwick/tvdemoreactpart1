import React from 'react';
import './App.css';
import ManagePage from './pages/managePage/managePage'
import PreviewPage from './pages/previewPage/previewPage'
import Navigation from './components/navigation/'
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
      <div className="content-container">

      
      <Navigation/>
      <Route exact path="/" component={ManagePage} />
      <Route path="/preview-page" component={PreviewPage} />
      </div>
    </div>
    </Router>
  );
}

export default App;
