/**
 * @author yetty
 * @since 24.10.2021
 */

var dailyRate;
var monthlyRate;

function dayRate(hourlyRate) {
    dailyRate = hourlyRate * 8;
    return dailyRate;
}

function monthRate(hourlyRate, discount) {
    if(discount < 0 || discount > 90) {
        return "Entered invalid discount value";
    }
    dayRate(hourlyRate);
    monthlyRate = dailyRate * 22;
    return applyDiscount(monthlyRate, discount);

}

function daysInBudget(budget, hourlyRate, discount) {
    var monthly = monthRate(hourlyRate, discount)
    var days = budget / monthly;
    days = Math.floor(days * 22)
    return days;
}

function applyDiscount(value, percentage) {
    //var discountValue = "";
    //var discountValue = percentage.replace('%', '');
    //if(percentage.toString().includes('.')) {
    //    discountValue = percentage.toString().replace('.', '');
    //}
    //else discountValue = percentage;
    //var count = discountValue.toString().length;
    //count = -count;
    //discountValue = (discountValue * Math.pow(10, count));

    value -= value * percentage;
    value = Math.ceil(value);
    return value;
}

console.log(daysInBudget(20000, 89, 0.2002));