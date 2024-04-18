const calculator = require('./calculator')

describe('Calculator', () => {
    // Test case: Addition
    it('should return the correct sum of two numbers', () => {
        const firstNum = 2;
        const operation = '+';
        const secondNum = 3;

        const result = calculator(firstNum, operation, secondNum);
        expect(result).toBe(5);
    });

    // Test case: Subtraction
    it('should return the correct difference of two numbers', () => {
        const firstNum = 5;
        const operation = '-';
        const secondNum = 2;

        const result = calculator(firstNum, operation, secondNum);

        expect(result).toBe(3);
    });

    // Test case: Multiplication
    it('should return the correct product of two numbers', () => {
        const firstNum = 4;
        const operation = '*';
        const secondNum = 6;

        const result = calculator(firstNum, operation, secondNum);

        expect(result).toBe(24);


    });

    // Test case: Division
    it('should return the correct quotient of two numbers', () => {
        const firstNum = 10;
        const operation = '/';
        const secondNum = 2;

        const result = calculator(firstNum, operation, secondNum);

        expect(result).toBe(5);
    });

    // Test case: Division by zero
    it('should throw an error when dividing by zero', () => {
        const firstNum = 6;
        const operation = '/';
        const secondNum = 0;

        expect(() => calculator(firstNum, operation, secondNum)).toThrow('Division by zero');
    });

    // Test case: Negative numbers
    it('should handle negative numbers correctly', () => {
        const firstNum = -8;
        const operation = '+';
        const secondNum = 5;

        const result = calculator(firstNum, operation, secondNum);
        expect(result).toBe(-3);
    });

    // Test case: Decimal numbers
    it('should handle decimal numbers correctly', () => {
        const firstNum = 3.5;
        const operation = '*';
        const secondNum = 2;

        const result = calculator(firstNum, operation, secondNum);
        expect(result).toBe(7);
    });

    // Test case: Order of operations
    it('should follow the correct order of operations', () => {
        const firstNum = 2;
        const firstOperation = '+';
        const secondNum = 3;
        const secondOperation = '*';
        const thirdNum = 4

        const result = calculator(firstNum, firstOperation, secondNum, secondOperation, thirdNum);
        expect(result).toBe(14);
    });

    // Test case: Invalid operator
    it('should throw an error for an invalid operator', () => {
        const firstNum = 5;
        const operation = '$';
        const secondNum = 3;

        expect(() => calculator(firstNum, operation, secondNum)).toThrow('Invalid operator');
    });

    // Test case: Invalid input type
    it('should throw an error for invalid input types', () => {
        const firstNum = '2';
        const operation = '+';
        const secondNum = 3;

        expect(() => calculator(firstNum, operation, secondNum)).toThrow('Invalid input type');
    });

    //Test case: Ignores numbers greater than 1000
    it('should ignore numbers greater than 1000', () => {
        const firstNum = 1001;
        const operation = '+';
        const secondNum = 3;

       const result = calculator(firstNum, operation, secondNum);
        expect(result).toBe(3);
    });
});