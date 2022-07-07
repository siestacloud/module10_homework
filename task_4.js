// Task 4. 10.4 строки числа
console.log("Task 4. 10.4 строки числа");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
console.log(getRandomInt(1, 100));
