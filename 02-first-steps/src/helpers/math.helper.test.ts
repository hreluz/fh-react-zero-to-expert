import {describe, expect, test} from 'vitest';
import { add, multiply, subtract } from './math.helpers';

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

describe('mtultiply', () => { 
    test('should mtultiply two positives numbers', () => {
        const a = 3;
        const b = 2;

        const result = multiply(a, b);

        expect(result).toBe(a*b);
    });
});