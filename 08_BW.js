/**
 * @author yetty
 * @since 01.11.2021
 */

function totalBirdCount(birdsPerDay) {
    var count = 0;
    for(var i = 0; i < birdsPerDay.length; i++) {
        count += birdsPerDay[i];
    }
    return count;
}

function birdsInWeek(birdsPerDay, weekNumber) {
    var weekStart = (weekNumber-1) * 7;
    var weekEnd = (weekNumber*7) - 1;
    var count = 0;

    for (weekStart; weekStart <= weekEnd; weekStart++) {
        count += birdsPerDay[weekStart];
    }

    return birdsPerDay;
}

function fixBirdCountLog(birdsPerDay) {
    var i = 0;
    do {
        birdsPerDay[i]++;
        i = i + 2;
    } while(i < birdsPerDay.length);

    return birdsPerDay;
}
// const birdsPerDay = [3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0, 8, 0];
// birdsInWeek(birdsPerDay, 1);
// fixBirdCountLog(birdsPerDay);