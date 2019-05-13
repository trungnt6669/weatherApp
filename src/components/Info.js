import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="weather">
        {this.props.weatherData.main ? (
          <div>
            <div className="city-name">{this.props.weatherData.name}</div>
            <div className="temp">
              Temperature: {this.props.weatherData.main.temp} °F
            </div>
            <div className="humidity">
              Humidity: {this.props.weatherData.main.humidity}%
            </div>
            <div className="pressure">
              Humidity: {this.props.weatherData.main.pressure} hpa
            </div>
          </div>
        ) : (
          <div>Invalid Input. Please Try Again</div>
        )}
      </div>
    );
  }
}

export default Info;
