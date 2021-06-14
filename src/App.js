import React from "react";
import "./App.css";

const API_KEY = "8133acfd7a5ebcbe1fb48d1f97b14df4";

class App extends React.Component {
  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        API_KEY +
        "&units=metric"
    );
    const data = await api_url.json();
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <Form weatherMethod={this.gettingWeather} />
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.weatherMethod}>
        <input type="text" name="city" placeholder="Город" />
        <button>Получить погоду</button>
      </form>
    );
  }
}

export default App;
