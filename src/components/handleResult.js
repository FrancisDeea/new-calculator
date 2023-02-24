export function calculator(formula, input) {
    const operators = /^\+$|^-$|^x$|^\/$/;
    let array = formula.concat(input);
    let result = 0;

    // if array ends with operator, eliminate operator
    if (array[array.length - 1].match(operators)) {
        array.pop();
    }

    // if array length is 1, returns item
    if (array.length === 1) {
        result = Number(array[0]);
        return result;
    }

    // parsing stringNumbers to numbers
    let parsed = array.map(item => {
        if (!item.match(operators)) {
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