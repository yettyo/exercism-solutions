/**
 * @author yetty
 * @since 24.10.2021
 */

const EXPECTED_MINUTES_IN_OVEN = 40;

function remainingMinutesInOven(actualMinutesInOven) {
    if(actualMinutesInOven > EXPECTED_MINUTES_IN_OVEN) {
        return "YOU OVERCOOKED THE LASAGNA! IT'S NOW A CHALK."
    }
    else if(actualMinutesInOven < 0) {
        return "You forgot to put the lasagna in the oven..."
    }
    else return (EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven);
}   

function preperationTimeInMinutes(NumberOfLayers) {
    if (NumberOfLayers < 0) {
        return "There's no lasagna to cook."
    }
    else return NumberOfLayers*2;
}

function totalTimeInMinutes(NumberOfLayers, actualMinutesInOven) {
    return (NumberOfLayers*2 + actualMinutesInOven);
}

//Test Cases
console.log(EXPECTED_MINUTES_IN_OVEN);
console.log(remainingMinutesInOven(-20)); //Expected output is "You forgot to put the lasagna in the oven..."
console.log(remainingMinutesInOven(60)); //Expected output is "YOU OVERCOOKED THE LASAGNA! IT'S NOW A CHALK."
console.log(remainingMinutesInOven(25)); //Expected output is 15. (40 - 25 = 15)
console.log(preperationTimeInMinutes(-3)); //Expected output is "There's no lasagna to cook."
console.log(preperationTimeInMinutes(3)); //Expected output is 6 
console.log(totalTimeInMinutes(5, 30)); //Expected output is 40
