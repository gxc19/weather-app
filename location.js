const axios = require('axios')

const mapboxkey = "" //secret key shhhh

const getCord = async (location) => {
    const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${mapboxkey}`

    try {
      const response = await axios.get(URL);

        return {
            lat: response.data.features[0].center[1],
            lng: response.data.features[0].center[0],
            location: response.data.features[0].place_name
        }

    //   console.log(`The longitude is ${} and the latitude is ${}`);
    } catch (error) {
      console.error(error);
    }
  }

  module.exports = {
      getCord
  }