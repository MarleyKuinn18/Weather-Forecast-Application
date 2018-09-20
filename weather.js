
const request = require('request');

const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const forecast = require('./forecast/forecast.js');

 const argv = yargs.options({
     a: {
       demand: true,
       string: true,
       alias: 'address',
       describe: 'coordinates to the provided address'
     }
 })

 
 .argv;
        
  geocode.geocodeAddress(argv.address, function(errorMessage, results){

    if(errorMessage)
    {
      console.log(errorMessage);
    }
    else{
      console.log(results.address);

      forecast.getWeather(results.latitude, results.longitude, function(errorMessage, weatherResuts)
      { 
        if(errorMessage)
        {
          console.log(errorMessage);
        }
        else
        {
          console.log(JSON.stringify(weatherResults, undefined, 3));
        }

      })
    }

  });
 
 forecast.getWeather();