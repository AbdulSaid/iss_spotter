/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
 const request = require('request');
 
 const fetchMyIP = function(callback) { 
  // use request to fetch IP address from JSON API
  request('https://api.ipify.org?format=json', function (error, response, body) {
    if (error) {
      callback(error,null);
      return;
    }
    // if non-200 status, assume server error
  if (response.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
    callback(Error(msg), null);
    return;
  }
    const ip = JSON.parse(body).ip
   if (ip) {
     callback(error,ip);
   }
 });
}

const fetchCoordsByIp = function(ip,callback) {
  request(`http://freegeoip.app/json/${ip}`, function (error, response, body) {
  if (error) {
    callback(error,null)
  }
  if (response.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
    callback(Error(msg), null);
    return;
  }
  const { latitude, longitude } = JSON.parse(body);

  callback(null, { latitude, longitude });
});
}


const fetchISSFlyOverTimes = function(coords, callback) {
  // ...
  const param = `https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;
  request(param, function (error, response, body) {
  if (error) {
    callback(error,null)
  }
  if (response.statusCode !== 200) {
    callback(Error(`Status code ${response.statusCode} when fetching the flyover times: ${body}`),null)
    return;
  }
  const passBy = JSON.parse(body).response;
  callback(null,passBy)

  // callback(null, { latitude, longitude });
});
};

const nextISSTimesForMyLocation = function(callback) {
  // empty for now
  fetchMyIP((error,ip)=> {
    if (error) {
      return callback(error,null)
    }
    fetchCoordsByIp(ip, (error, location) => {
      if (error) {
        return callback(error,null)
      }
      fetchISSFlyOverTimes(location,(error,nextPasses)=> {
        if (error) {
          return callback(error,null)
        }
        callback(error, nextPasses)
      })
    })
  })
  
  
}


module.exports = nextISSTimesForMyLocation;