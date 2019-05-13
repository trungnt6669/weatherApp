import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unitFormat: 'F'
    };

    this.handleClick = this.handleClick.bind(this);
    this.displayTemp = this.displayTemp.bind(this);
  }

  // Display temperature in Fahrenheit or Celsius depending on the toggle
  displayTemp() {
    if (this.state.unitFormat === 'F') {
      return this.props.weatherData.main.temp;
    } else {
      return (
        (Number(this.props.weatherData.main.temp) - 32) *
        (5 / 9)
      ).toFixed(2);
    }
  }

  handleClick() {
    if (this.state.unitFormat === 'F') {
      this.setState({ unitFormat: 'C' });
    } else {
      this.setState({ unitFormat: 'F' });
    }
  }

  render() {
    return (
      <div className="weather">
        {this.props.weatherData.main ? (
          <div>
            <div className="city-name">{this.props.weatherData.name}</div>
            <div className="temp">
              Temperature: {this.displayTemp()} °{this.state.unitFormat}
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
        <button className="unit-toggle" onClick={this.handleClick}>
          {this.state.unitFormat === 'F' ? 'Celsius' : 'Fahrenheit'}
        </button>
      </div>
    );
  }
}

export default Info;
