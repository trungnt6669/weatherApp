import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="weather">
        {this.props.weatherData.main && (
          <div>
            <div className="temp">
              Temperature: {this.props.weatherData.main.temp} degrees
            </div>
            <div className="humidity">
              Humidity: {this.props.weatherData.main.humidity}%
            </div>
            <div className="pressure">
              Humidity: {this.props.weatherData.main.pressure}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Info;
