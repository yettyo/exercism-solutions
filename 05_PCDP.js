/**
 * @author yetty
 * @since 24.10.2021
 */
var firstLetterArr = [];
var lastLetterArr = [];

function frontDoorResponse(line) {
    var firstLetter = line[0];
    firstLetterArr.push(firstLetter);
    return firstLetter;
}

function frontDoorPassword(password) {
    password = password[0] + password.slice(1).toLowerCase();
    return password;
}

function backDoorResponse(line) {
    line = line.trim();
    var lastLetter = line[line.length-1];
    lastLetterArr.push(lastLetter);
    return lastLetter;
}

function backDoorPassword(password) {
    password = password[0].toUpperCase() + password.slice(1).toLowerCase();
    password += ", please";
    return password;
}
