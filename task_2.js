
// Task 2. 10.3 логический тип ветвление
console.log("Task 2. 10.3 логический тип ветвление");

clientInput = prompt("Task 2. Input: ")
switch (true) {
    case typeof (+clientInput) === "number" && !isNaN(+clientInput):
        console.log("Тип данных - число ");
        break;
    case clientInput === 'true' || clientInput === 'false':
        console.log("Тип данных - логический ");
        break;
    case typeof (clientInput) === 'string':
        console.log("Тип данных - строка ");
        break;
    default:
        console.log("Тип данных - не определен ");
        break;
}
