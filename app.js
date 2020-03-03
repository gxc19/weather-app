const {getWeather} = require('./weather')
const {getCord} = require('./location')
const figlet = require('figlet');

const main = async (input) => {
    const locationObj = await getCord(input)
    await getWeather(locationObj)
}

main(process.argv[2])

console.log(figlet.textSync('Weather App', {
    font: 'acrobatic',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));