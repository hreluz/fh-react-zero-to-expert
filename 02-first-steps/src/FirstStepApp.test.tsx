import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render, screen } from "@testing-library/react";

const mockItemCounter = vi.fn((_props:unknown) => {
    return (<div data-testid="ItemCounter"/>)
});

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props)
}));

// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: (props: unknown) => <div data-testid="ItemCounter" />
// }));

describe('FirstStepApp', () => {

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should match snapshot', () => {
        const {container} = render(<FirstStepsApp/>);

        expect(container).toMatchSnapshot();

        screen.debug()
    });

    test('should render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp/>)
        
        const itemCounters = screen.getAllByTestId('ItemCounter');

        expect(itemCounters.length).toBe(4);

        screen.debug();
    });

    test('should render ItemCounter with correct props', () => {
        render(<FirstStepsApp/>);

        expect(mockItemCounter).toHaveBeenCalledTimes(4);

        expect(mockItemCounter).toHaveBeenCalledWith(
            {name: 'Nintendo Switch 2', quantity: 5}
        );
        expect(mockItemCounter).toHaveBeenCalledWith(
            {name: 'Play Station 4', quantity: 6}
        );
        expect(mockItemCounter).toHaveBeenCalledWith(
            {name: 'Play Station 5', quantity: 3}
        );
        expect(mockItemCounter).toHaveBeenCalledWith(
            {name: 'Play Station 3', quantity: 5}
        );
    });
});