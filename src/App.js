import React from 'react';
import Title from './components/Title';
import Searchbar from './components/Searchbar';
import Info from './components/Info';
import { fetchWeather } from './utils/api';
import { pushMax } from './utils/functions';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherInfo: '',
      mostRecent: []
    };

    this.getWeatherData = this.getWeatherData.bind();
  }

  getWeatherData = async query => {
    const info = await fetchWeather(query);
    this.setState({
      weatherInfo: info,
      mostRecent: pushMax(this.state.mostRecent, info, 3) // Save the 3 most recent searches
    });
  };

  render() {
    return (
      <div>
        <div className="app-container">
          <Title />
          <Searchbar getWeather={this.getWeatherData} />
          <Info
            recentSearches={this.state.mostRecent}
            weatherData={this.state.weatherInfo}
          />
        </div>
      </div>
    );
  }
}

export default App;
