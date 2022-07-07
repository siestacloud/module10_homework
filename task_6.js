// Task 6. 10.6 Циклы
console.log("Task 6. 10.6 Циклы.");
let array = ["ok", "ok", "k"]
let baseEl;
function checkEqual(array) {
    for (let index = 0; index < array.length; index++) {
        if (index == 0) {
            baseEl = array[index];
        }
        if (baseEl != array[index]) {
            return false
        }
    }
    return true
}
console.log(checkEqual(array));
