

// Task 7. 10.6 Циклы
console.log("Task 7. 10.6 Циклы.");
array = [1, true, false, 3, "pasha", 5, null, 400, 500, 3, 3, 2, ["item", 1]] //четных 3  не четных 5
let sumEven = 0
let sumOdd = 0

for (let index = 0; index < array.length; index++) {
    if (typeof (array[index]) === "number" && !isNaN(+array[index])) {
        if (array[index] % 2 == 0) {
            sumEven++
        } else {
            sumOdd++
        }
    }
}
console.log(`Сумма четных чисел в массиве: ${sumEven}  Сумма не четных чисел в массиве: ${sumOdd} `);
