import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        console.log('city data: ',cityData);
        const city = cityData.city.name;
        const { lat, lon } = cityData.city.coord;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        return(
            <tr key={city}>
                <td><GoogleMap name="city" lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color='red' units='K' /></td>
                <td><Chart data={pressure} color='orange' units='hPa' /></td>
                <td><Chart data={humidity} color='green' units='%' /></td>
            </tr>
        );
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th>City</th>
                    <th>Terperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// function mapStateToProps(state) {
//     console.log(state.weather);
//     return {weather: state.weather};
// }

function mapStateToProps({ weather }) {
    // console.log('weather: ',weather);
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);