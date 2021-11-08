const  nextISSTimesForMyLocation = require('./iss_promised');

const printPassTimes = function(message) {
  console.log(message);
}

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  })