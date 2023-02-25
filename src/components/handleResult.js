export function calculator(formula, input) {
    const operators = /\+|\-|\/|\x/;
    let array = [...formula];
    let result = 0;

    // if input is not operator, concatenate formula and input
    if (!input.match(operators)) {array.push(input)}

    // if array only includes 0
    if (array.length === 1 && array[0] === 0) {
        return result;
    }

    // if array ends with operator, eliminate operator(s)
    if (array[array.length - 1].match(operators)) {
        if (array[array.length - 2].match(operators)) {
            array = array.slice(0, -2)
        } else {
            array = array.slice(0, -1)
        }
    }

    // if array length is 1, returns item
    if (array.length === 1) {
        result = Number(array[0]);
        return result;
    }

     for (let item in array) {
        if (array[item] === "-") {
            let indexNegative = array.indexOf(array[item]);
            if (array[indexNegative - 1].match(operators)) {
                let numberNegative = array[indexNegative + 1];
                array.splice(indexNegative, 2, -numberNegative)
            }
        }
     }

    // parsing stringNumbers to numbers
    let parsed = array.map(item => {
        if (typeof item === "number") {
            return item
        } else if (!item.match(operators)) {
            return Number(item)
        } else {return item}
    });

    // check if array includes multiplications and divisions
    while (parsed.includes("x") || parsed.includes("/")) {
        for (let item in parsed) {
            if (parsed[item] === "x") {
                let previous = parsed.indexOf("x") - 1;
                let next = parsed.indexOf("x") + 1;
                let result = parsed[previous] * parsed[next];
                parsed.splice(previous, 3, result);
            }
            if (parsed[item] === "/") {
                let previous = parsed.indexOf("/") - 1;
                let next = parsed.indexOf("/") + 1;
                let result = parsed[previous] / parsed[next];
                parsed.splice(previous, 3, result);
            }
        }
    }

    // check if array includes add or subtract
    while (parsed.includes("+") || parsed.includes("-")) {
        for (let item in parsed) {
            if (parsed[item] === "+") {
                let previous = parsed.indexOf("+") - 1;
                let next = parsed.indexOf("+") + 1;
                let result = parsed[previous] + parsed[next];
                parsed.splice(previous, 3, result);
            }
            if (parsed[item] === "-") {
                let previous = parsed.indexOf("-") - 1;
                let next = parsed.indexOf("-") + 1;
                let result = parsed[previous] - parsed[next];
                parsed.splice(previous, 3, result);
            }
        }
    }

    return Number(parsed.join(""));
}