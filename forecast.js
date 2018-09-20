
const request = require('request');

var getWeather = function(lat, lng)
{
    request({
        url: `https://api.forecast.io/ec207dc5bff0739c115425ff839b7e8${lat},${lng}`,
        json: true
    }, function(error, response, body)
{
    if(error)
    {
        console.log(error);
    }
    else if(response.statusCode === 404)
    {
        console.log('not found');
    }
    else if(response.statusCode === 200)
    {
        console.log(body.currently.temperature);
        console.log(body.currently.apparentTemperature);
    }
})
}

module.exports.getWeather = getWeather;