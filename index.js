// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
    return arr.slice(0, 2);
}

const returnLastTwoDrivers = function(arr){
    let newarr = [];
    let i = 1
    while(i < 3){
        newarr.push(arr[arr.length-i]);
        i++;
    }
    return newarr.reverse();
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(mult){
    return function(fare){
        return fare * mult;
    }
}

function fareDoubler(fare){
    return createFareMultiplier(2)(fare);
}

function fareTripler(fare){
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arr, func){
    return func(arr);
}