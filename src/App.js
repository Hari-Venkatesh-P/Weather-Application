import React ,{Component} from 'react';
import './App.css';
import "weather-icons/css/weather-icons.css"
import Weather from "./component/Weather";
import Form from "./component/form";
//import "bootstrap/dist/css/boostrap.min.css";

//const api_key = "395b3c73a8c8e56ba4409115ebe4bb85";


//api_call="api.openweathermap.org/data/2.5/weather?q=London,uk "
class App extends Component
{
  constructor()
  {
    super();
    
    this.state = {
      city:undefined,
      state:undefined,
      degree:undefined,
      description:undefined,
      mintemp:undefined,
      maxtemp:undefined,
      icon:undefined,
    };

    this.weatherIcon = {
      Thunderstorm:"wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain:"wi-storm-showers",
      Snow:"wi-snow",
      Atmosphere:"wi-fog",
      Clear:"wi-day-sunny",
      Clouds:"wi-day-fog"
    }
  }
getWeatherIcon(weathericon,rangeId){
  switch(true)
  {
    case rangeId>=200 && rangeId<=232:
      this.setState({icon:weathericon.Thunderstorm});
      break;
    case rangeId>=300 && rangeId<=321:
      this.setState({icon:weathericon.Drizzle});
      break;
    case rangeId>=500 && rangeId<=531:
      this.setState({icon:weathericon.Rain});
      break;
    case rangeId>=600 && rangeId<=622:
      this.setState({icon:weathericon.Snow});
      break;
    case rangeId>=701 && rangeId<=781:
        this.setState({icon:weathericon.Atmosphere});
        break;
    case rangeId===800:
      this.setState({icon:weathericon.Clear});
      break;
      case rangeId>=801 && rangeId <=804:
        this.setState({icon:weathericon.Clouds});
        break;
        default:
          this.setState({icon:weathericon.Clouds});
  }
}

  getWeather = async (e) =>
  {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if(city&&country){
    const api_key = "395b3c73a8c8e56ba4409115ebe4bb85";
    var p1="https://api.openweathermap.org/data/2.5/weather?q=";
    var p2=city+","
    var p3=country+",In&appid="+api_key;
    const api_call = await fetch(p1+p2+p3);
    const response = await api_call.json();
    if(response.cod!=="404")
    {
    console.log(response);
    console.log(response.name);
    console.log(response.sys.country);
    console.log(response.weather[0].description);
    console.log(response.main.temp_min);
    console.log(response.main.temp_max);
    console.log(this.weatherIcon.Thunderstorm);
    this.setState(
      {
        city:response.name +","+response.sys.country,
        country:response.sys.country,
        description:response.weather[0].description,
      }
    )
    this.getTemperature(response.main.temp_min,response.main.temp_max)
    this.getWeatherIcon(this.weatherIcon, response.weather[0].id);
    this.getDegree(response.main.temp)
    }
    else{
      alert("Cannot Locate the Location..!!")
    }
  }
  else
  {
    alert("Enter the Location Details..!!")
  }
  }

  getDegree(temp)
  {
    this.setState({degree:Math.floor(temp-273).toFixed(2)})
  }
  
  getTemperature(min,max)
  {
      this.setState({mintemp:"Minimum : "+Math.floor(min-273).toFixed(2)})
      this.setState({maxtemp:"Maximum : "+Math.floor(max-273).toFixed(2)})
  }
  render(){
    return(<div className="App">
      <Form loadWeatherComponent={this.getWeather}></Form>
        <Weather city={this.state.city} country={this.state.country} degree={this.state.degree} description={this.state.description} mintemp={this.state.mintemp} maxtemp={this.state.maxtemp} icon={this.state.icon}/>
      </div>
    );
  }
}
export default App;
