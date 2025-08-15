import { describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render, screen } from "@testing-library/react";

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: () => <div data-testid="ItemCounter"/>
}));

describe('FirstStepApp', () => {
    test('should match snapshot', () => {
        const {container} = render(<FirstStepsApp/>);

        expect(container).toMatchSnapshot();

        screen.debug()
    });

    test('should render the correct number of ItemCounter compomnents', () => {
        render(<FirstStepsApp/>)
        
        const itemCounters = screen.getAllByTestId('ItemCounter');

        expect(itemCounters.length).toBe(4);

        screen.debug();
    })
});