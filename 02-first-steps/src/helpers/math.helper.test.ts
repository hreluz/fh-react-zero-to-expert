import {expect, test} from 'vitest';
import { add } from './math.helpers';


test('should add two positives numbers', () => {
    const a = 1;
    const b = 2;

    const result = add(a, b);

    expect(result).toBe(a+b);

});