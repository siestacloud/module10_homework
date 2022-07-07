
// Task 1. 10.3 логический тип ветвление
console.log("Task 1. 10.3 логический тип ветвление");

let clientInput = +prompt("Task 1. Input:")

console.log(typeof (clientInput), clientInput);

switch (true) {
    case isNaN(clientInput):
        console.log("Упс, кажется, вы ошиблись");
        break;
    default:
        if (clientInput % 2 === 0) {
            console.log("Число ", clientInput, " четное");

        } else {
            console.log("Число ", clientInput, " не четное");
        }
        break;
}