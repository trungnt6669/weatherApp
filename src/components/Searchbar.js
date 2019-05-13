import React from 'react';

function SelectSearchMode({ selectedMode, onSelect }) {
  const modes = ['Coordinates', 'City Name', 'ZIP Code'];
  return (
    <ul className="search-mode">
      {modes.map(mode => (
        <li
          style={mode === selectedMode ? { color: '#d0021b' } : null}
          onClick={() => onSelect(mode)}
          key={mode}
        >
          {mode}
        </li>
      ))}
    </ul>
  );
}

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMode: 'Coordinates',
      cityName: '',
      lon: '',
      lat: '',
      zip: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    // When user first visits the site, it will set the coordinates of their current location and run search
    this.getCoords();
  }

  // Get Coordinates of new users
  getCoords() {
    if (window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        error => {
          console.log(error.message);
        }
      );
    }
  }

  // Changes Search Type
  updateSearchMode = mode => {
    this.setState({
      searchMode: mode
    });
  };

  // Update states for desired query
  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  // Get query depending on the mode
  handleSearch = event => {
    event.preventDefault();
    let query = '';
    let mode = this.state.searchMode;
    switch (mode) {
      case 'City Name':
        query = `q=${this.state.cityName},us`;
        break;
      case 'Coordinates':
        query = `lat=${this.state.lat}&lon=${this.state.lon}`;
        break;
      case 'ZIP Code':
        query = `zip=${this.state.zip},us`;
        break;
      default:
        console.log('Something went wrong...');
    }
  };

  render() {
    return (
      <div>
        <SelectSearchMode
          selectedMode={this.state.searchMode}
          onSelect={this.updateSearchMode}
        />
        <form onSubmit={this.handleSearch} className="search-form">
          {this.state.searchMode === 'Coordinates' && (
            <div className="coords">
              <input
                type="text"
                name="lat"
                placeholder="Please Input Latitude"
                value={this.state.lat}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="lon"
                placeholder="Please Input Longitude"
                value={this.state.lon}
                onChange={this.handleChange}
              />
            </div>
          )}
          {this.state.searchMode === 'City Name' && (
            <input
              type="text"
              name="cityName"
              placeholder="Please Input City Name"
              value={this.state.cityName}
              onChange={this.handleChange}
            />
          )}
          {this.state.searchMode === 'ZIP Code' && (
            <input
              type="text"
              name="zip"
              placeholder="Please Input ZIP"
              value={this.state.zip}
              onChange={this.handleChange}
            />
          )}
          <button>Get Forecast</button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
