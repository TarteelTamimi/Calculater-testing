const calculate = (a, operator, b) => {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                throw new Error('Division by zero');
            }
            return a / b;
        default:
            throw new Error('Invalid operator');
    }
}

const calculator = (...args) => {
    let operators = [];
    let operands = [];

    for (let i = 0; i < args.length; i += 2) {
        if (typeof args[i] !== 'number') {
            throw new Error('Invalid input type');
        }
    }

    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number') {
            operators.push(args[i]);
        } else {
            operands.push(args[i])
        }
    }
    let operatorsSize = operators.length;

    for (let i = 0; i < operatorsSize; i++) {
        // console.log(operators);
        // console.log(operands);
        // console.log('_____________');

        if (operators[i] === '*' || operators[i] === '/') {

            if (operators[i] === '*') {
                let result = calculate(operands[operators.indexOf('*')], '*', operands[operators.indexOf('*') + 1]);
                operands.splice(operators.indexOf('*'), 2, result);
                operators.splice(i, 1);
            } else {
                let result = calculate(operands[operators.indexOf('/')], '/', operands[operators.indexOf('/') + 1])
                operands.splice(operators.indexOf('/'), 2, result);
                operators.splice(i, 1);
            }
            i--;
        }
    }

    if (operands.length === 1) {
        return operands[0];
    } else {
        let finalResult = operands[0];
        for (let i = 1; i < operands.length; i++) {
            finalResult = calculate(finalResult, operators[i - 1], operands[i]);
        }
        return finalResult;
    }

}


//console.log(calculator(2, '*', 5, '-', 6, '/', 2, '*', 3, '+', 7, '*', 5));

module.exports = calculator;
