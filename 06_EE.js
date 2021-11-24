/**
 * @author yetty
 * @since 01.11.2021
 */


function getItem(arr, position) {
    return arr[position];
}

function setItem(arr, position, newCard) {
    arr.splice(position, 1, newCard);
    return arr;
}

function insertItemAtTop(arr, newCard) {
    arr.push(newCard);
    return arr;
}

function insertItemAtBottom(arr, newCard) {
    arr.splice(0, 0, newCard);
    return arr;
}

function removeItem(arr, position) {
    arr.splice(position, 1);
    return arr;
}

function removeItemAtTop(arr) {
    arr.pop();
    return arr;
}

function removeItemAtBottom(arr) {
    arr.splice(0, 1);
    return arr;
}

function checkSizeOfStack(arr, stackSize) {
    return arr.length == stackSize;
}

// var arr = [2, 4, 5, 3];
// var stackSize = 4;
// console.log(checkSizeOfStack(arr, stackSize))
