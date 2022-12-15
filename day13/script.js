
fs = require('fs');
fs.readFile('input.txt', 'utf-8', function (err, data) {
    if (err)
        return console.log(err);
    
    getAnswer(data);
})

function getAnswer(data) {

    let lines = data.trim().split("\n").filter(str => str.trim() != "");   //trim ends, split on newline, remove empty lines
    let arrays = [];

    lines.forEach(line => {
        arrays.push(JSON.parse(line));
    });

    let sumOfIndicesInOrder = 0;

    for (let i = 0; i < arrays.length; i += 2) {
        let arr1 = arrays[i];
        let arr2 = arrays[i + 1];
        let groupIndex = i / 2 + 1;

        if (compareArrays(arr1, arr2) == -1) {
            sumOfIndicesInOrder += groupIndex;
        }
    }

    console.log("Part 1 answer is: " + sumOfIndicesInOrder);


    const divider1 = JSON.parse("[[2]]");
    const divider2 = JSON.parse("[[6]]");
    arrays.push(divider1);
    arrays.push(divider2);
    arrays.sort(compareArrays);

    const index1 = arrays.indexOf(divider1) + 1;
    const index2 = arrays.indexOf(divider2) + 1;

    console.log("Part 2 answer is: " + (index1 * index2));
}

function compareElements(obj1, obj2) {
    const type1 = typeof (obj1);
    const type2 = typeof (obj2);

    let result = -2;

    if (type1 == "number" && type2 == "number") {
        result = Math.sign(obj1 - obj2);
    } else if (type1 == "object" && type2 == "object") {
        result = compareArrays(obj1, obj2);
    } else if (type1 == "number") {
        result = compareArrays([obj1], obj2);
    } else if (type2 == "number") {
        result = compareArrays(obj1, [obj2]);
    } else {
        console.error("UNKNOWN DATA TYPE :(");
    }

    return result;
}

function compareArrays(arr1, arr2) {

    let max = Math.min(arr1.length, arr2.length);

    for (let i = 0; i < max; i++) {
        let o1 = arr1[i];
        let o2 = arr2[i];

        let comparison = compareElements(o1, o2);

        if (comparison != 0)
            return comparison;
    }

    return Math.sign(arr1.length - arr2.length);
}

