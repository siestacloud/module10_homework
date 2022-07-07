// Task 8. 10.7 Ассоциативные массивы
console.log("Task 7. 10.7 Ассоциативные массивы.");


let addresses = new Map([

    ["pasha", "Moskow"],

    ["Vladimir", "Saratov"],

    ["Ylia", "Volgograd"]
]);

for (let elem of addresses) {
    console.log(`Ключ — ${elem[0]}, значение — ${elem[1]}`); 
 }