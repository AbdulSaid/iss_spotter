// index.js
// const { fetchMyIP } = require('./iss');
// const fetchCoordsByIP  = require('./iss');
// const fetchISSFlyOverTimes = require('./iss')
const  nextISSTimesForMyLocation  = require('./iss');

const calculateTime = (passTimes) =>{
  for (let time of passTimes) {
    const dateTime = new Date(0);
    const duration = time.duration;
    console.log(`Next pass at ${dateTime} for ${duration} seconds!`)
  }
}


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!

  calculateTime(passTimes);
});
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

// const coords = {
//   latitude: "43.5639",
//   longitude:"-79.7172"
// }
// fetchISSFlyOverTimes(coords, (error, passbyTimes)=> {
//   if (error) {
//     console.log(`It didn't work ${error}`)
//   }
//   console.log(passbyTimes)
// })
