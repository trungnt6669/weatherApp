import React from 'react';
import Title from './components/Title';
import Searchbar from './components/Searchbar';
import Info from './components/Info';
import { fetchWeather } from './utils/api';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherInfo: ''
    };

    this.getWeatherData = this.getWeatherData.bind();
  }

  getWeatherData = async query => {
    const info = await fetchWeather(query);
    this.setState({
      weatherInfo: info
    });
  };

  render() {
    return (
      <div>
        <div className="app-container">
          <Title />
          <Searchbar getWeather={this.getWeatherData} />
          <Info weatherData={this.state.weatherInfo} />
        </div>
      </div>
    );
  }
}

export default App;
