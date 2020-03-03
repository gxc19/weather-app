const axios = require('axios')


const apikey = "" //secret key shhhhh

const celsius = (f) => {
    return (f - 32)*5/9
}


const getWeather = async (locationObj) => {


    const {lat, lng, location} = locationObj
    const URL = `https://api.darksky.net/forecast/${apikey}/${lat},${lng}`

    try {
      const response = await axios.get(URL);
      console.log(`The weather in ${location} is ${(response.data.currently.summary).toLowerCase()} and the temperature is ${celsius(response.data.currently.temperature)} °C`);
    } catch (error) {
      console.error(error);
    }
  }

  module.exports = {
    getWeather
  }
