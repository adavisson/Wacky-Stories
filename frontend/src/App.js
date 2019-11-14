import React from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import TemplateContainer from './containers/TemplateContainer';
import SavedStoriesContainer from './containers/SavedStoriesContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/templates" component={TemplateContainer} />
        <Route path="/saved-stories" component={SavedStoriesContainer} />
      </div>
    </Router>
    // <div className="App">
    //   <TemplateContainer />
    // </div>
  );
}

export default App;
