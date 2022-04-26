// Code your solution in this file!

const blocks = 42
const feet = 264 // 1 block = 264 ft

function distanceFromHqInBlocks(x) {
    //returns the number of blocks given a value
    if (x>blocks) {
        return x - blocks;
    } else {
        return blocks - x;
    }
  }

  function distanceFromHqInFeet(blocks) {
    let feet = distanceFromHqInBlocks(blocks);
    return feet * 264
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start < destination) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
  }

  function calculatesFarePrice(pickup, dropoff) {
    //returns the fare for the customer
    let trip = distanceTravelledInFeet(pickup, dropoff)
    if (trip <= 400){
        return 0;
    } else if (trip <= 2000) {
        return ( trip - 400) * 0.02;
    } else if (trip <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
    }
