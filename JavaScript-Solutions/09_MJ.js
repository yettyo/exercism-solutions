/**
 * @author yetty
 * @since 01.11.2021
 */

function timeToMixJuice(name) {
    switch(name) {
        case 'Pure Strawberry Joy':
            return 0.5;
        case 'Energizer':
            return 1.5;
        case 'Green Garden':
            return 1.5;
        case 'Tropical Island':
            return 3;
        case 'All or Nothing':
            return 5;
        default:
            return 2.5;
    }
}

function limesToCut(wedgesNeeded, limes) {
    var wedgesCut = 0; var i = 0;
    //return 0 if we don't need any lime wedges OR there's no limes to cut.
    if(limes.length == 0 || wedgesNeeded == 0) return i;
    do {
        switch (limes[i]) {
            case 'small':
                wedgesCut += 6;
                break;
            case 'medium':
                wedgesCut += 8;
                break;
            case 'large':
                wedgesCut += 10;
                break;
            default:
                break;
        }
        i++;
        //return if there's no limes left to cut.
        if(i == limes.length) return i;
    } while(wedgesCut < wedgesNeeded);
    return i;
}

function remainingOrders(timeLeft, orders) {
    do {
        timeLeft -= timeToMixJuice(orders[0]);
        orders.splice(0,1);
    } while(timeLeft > 0);

    return orders;
}

console.log(timeToMixJuice('Tropical Island'));
console.log(timeToMixJuice('Berries & Lime'));
console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small']));
console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']));
console.log(limesToCut(80, ['small','large','large','medium','small','large', 'large']));
console.log(limesToCut(10, []));
console.log(limesToCut(0, ['small', 'large', 'medium']));
