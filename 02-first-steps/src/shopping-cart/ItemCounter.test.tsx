import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";
import { fireEvent, render, screen } from "@testing-library/react";

describe('ItemCounter', () => {
    test('should render with default values', () => {
        const name = "Test item";

        render(<ItemCounter name={name}/>);

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    });

    test('should render with custom quantity', () => {
        const name = "Dualshock controller";
        const quantity = 10;

        render(<ItemCounter name={name} quantity={10}/>);

        expect(screen.getByText(quantity)).toBeDefined();
    });

    test('should increase count when +1 button is pressed', () => {
        render(<ItemCounter name="Test item" quantity={1}/>)

        const [buttonAdd] = screen.getAllByRole('button');

        fireEvent.click(buttonAdd);

        expect(screen.getByText('2')).toBeDefined();
    });

    test('should decrease count when -1 button is pressed', () => {
        render(<ItemCounter name="Test item" quantity={5}/>)

        const [, buttonSubtract] = screen.getAllByRole('button');

        fireEvent.click(buttonSubtract);

        expect(screen.getByText('4')).toBeDefined();
    });

    test('should not decrease count when -1 button is pressed and quantity is 1', () => {
        render(<ItemCounter name="Test item" quantity={1}/>)

        const [, buttonSubtract] = screen.getAllByRole('button');

        fireEvent.click(buttonSubtract);

        expect(screen.getByText('1')).toBeDefined();
    });

    test('should change to red when count is greater than 1', () => {
        const quantity = 1;
        const name = 'Test Item';
        render(<ItemCounter name={name} quantity={quantity}/>);


        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('red');
    });
});