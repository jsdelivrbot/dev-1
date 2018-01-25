function every(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}

function some(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (callback2(arr[i])) {
            return true;
        }
    }
    return false;
}

module.exports = {
    every,
    some
}