

const request = require('request');
var latitude = body.results[0].geometry.location.lat;
var longitude = body.results[0].geometry.location.lng;
var geocodeAddress = function(address, callback)
{ 
    var encodedAddress = encodeURIComponent(address);

    request({
        url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json : true 
    }, (error, response, body) =>
    {
        if(error)
        {
          console.log('Unable to connect to the servers');
        }
        else if(body.status === "ZERO_RESULTS")
        {
          console.log('Bad request..');
        }
        else if(body.error_message === "Invalid request. Missing the 'address', 'components', 'latlng' or 'place_id' parameter."){
          console.log('Google maps are unable to provide services...');
        }
        else if(body.status === "OK")
        {
         callback(undefined,
        {
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
    
        
        }
    });
   
};

 module.exports.geocodeAddress = geocodeAddress;