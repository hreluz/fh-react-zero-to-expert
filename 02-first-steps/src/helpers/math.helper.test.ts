import {describe, expect, test} from 'vitest';
import { add, divide, multiply, subtract } from './math.helpers';

describe('add', () => { 
    test('should add two positives numbers', () => {
        const a = 1;
        const b = 2;

        const result = add(a, b);

        expect(result).toBe(a+b);
    });

    test('should add two negative positives numbers', () => {
        const a = -1;
        const b = -2;

        const result = add(a, b);

        expect(result).toBe(a+b);
    });
});

describe('subtract', () => { 
    test('should subtract two positives numbers', () => {
        const a = 1;
        const b = 2;

        const result = subtract(a, b);

        expect(result).toBe(a-b);
    });
});

describe('multiply', () => { 
    test('should multiply two positives numbers', () => {
        const a = 3;
        const b = 2;

        const result = multiply(a, b);

        expect(result).toBe(a*b);
    });
});

describe('divide', () => { 
    test('should divide two positives numbers', () => {
        const a = 4;
        const b = 2;

        const result = divide(a, b);

        expect(result).toBe(a/b);
    });
});