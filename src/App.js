import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import Form from './components/Form';
import Weather from "./components/Weather";

const API_KEY = "e5d7c300496c6e5faf762bf896ca9fcc";

class App extends Component {
  
  state = {
    city: undefined,
    country: undefined,
    title: undefined,
    description: undefined,
    temperature: undefined,
    realFeel: undefined,
    humidity: undefined
  }

  getWeather = async (event) => {
    event.preventDefault();
    event.persist();
    const city = event.target.form.elements.city.value;
    const country = event.target.form.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);

    this.setState({
      city: data.name,
      country: data.sys.country,
      title: data.weather[0].main,
      description: data.weather[0].description,
      temperature: Math.round(data.main.temp),
      realFeel: Math.round(data.main.feels_like),
      humidity: data.main.humidity
    })
  };

  render() {
    return (
      <div className="container-sm rounded shadow bg-light p-4 mt-4">
        <h1>Weather</h1>
        <Form getWeather={this.getWeather} />
          <Weather
            city={this.state.city}
            country={this.state.country}
            title={this.state.title}
            description={this.state.description}
            temperature={this.state.temperature}
            realFeel={this.state.realFeel}
            humidity={this.state.humidity}
          />
      </div>
    );
  }
}
 
export default App;
