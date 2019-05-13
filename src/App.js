import React from 'react';
import Title from './components/Title';
import Searchbar from './components/Searchbar';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="app-container">
          <Title />
          <Searchbar />
        </div>
      </div>
    );
  }
}

export default App;
