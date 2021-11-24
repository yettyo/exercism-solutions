/**
 * @author yetty
 * @since 01.11.2021
 */

function needsLicense(kind) {
    if(kind == 'car' || kind == 'truck') {
        return true;
    }
    else {
        return false;
    }
}

function chooseVehicle(option1, option2) {
    if(option1 < option2) return option1 + " is clearly the better choice.";
    else return option2 + " is clearly the better choice.";
}

function calculateResellPrice(originalPrice, age) {
    if(age < 3) return originalPrice * 80/100;
    else if(age <= 10) return originalPrice * 70/100;
    else return originalPrice * 50/100;
}