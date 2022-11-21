// Code your solution in this file!
const returnFirstTwoDrivers = function (names) {
    return [names[0], names[1]];
};

const returnLastTwoDrivers = function (names) {
    return [names[names.length-2], names[names.length-1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare) {return fare * multiplier};
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers);
}