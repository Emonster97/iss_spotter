// index.js

// The code below is temporary and can be commented out.
const { nextISSTimesForMyLocation } = require('./iss');
const {printPassTimes} = require('./iss_promised');


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});