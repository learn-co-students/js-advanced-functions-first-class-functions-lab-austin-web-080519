// Code your solution in 

const returnFirstTwoDrivers = (function(array) { 
    return array.slice(0,2)
})

const returnLastTwoDrivers = (function(array) { 
    let nextToLast = array.length - 2
    return array.slice(nextToLast)
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => {
    return (function(fare){return fare * int})
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (drivers, dFunction) => {
    return dFunction(drivers)
}