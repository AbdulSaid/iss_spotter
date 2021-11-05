// index.js
// const { fetchMyIP } = require('./iss');
// const fetchCoordsByIP  = require('./iss');
const fetchISSFlyOverTimes = require('./iss')


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
  
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('99.247.15.231', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coordinates);
// });

const coords = {
  latitude: "43.5639",
  longitude:"-79.7172"
}
fetchISSFlyOverTimes(coords, (error, passbyTimes)=> {
  if (error) {
    console.log(`It didn't work ${error}`)
  }
  console.log(passbyTimes)
})