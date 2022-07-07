
// Task 3. 10.4 строки числа
console.log("Task 3. 10.4 строки числа");
clientInput = prompt("Task 3. Input: ")

function reverse(clientInput) {
    let clientInputReverse = '';
    for (let i = clientInput.length - 1; i >= 0; i--) {
        clientInputReverse += clientInput[i];
    }
    return clientInputReverse;
}

console.log(reverse(clientInput));
