import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
import { fireEvent, render, screen } from "@testing-library/react";

describe('MyCounterApp', () => {

    test('should render the component', () => {
        render(<MyCounterApp/>);
        
        // screen.debug();

        expect(
            screen.getByRole('heading', {level:1}).innerHTML
        ).toContain(
            `counter: 7`
        );

        expect(screen.getByRole('button', {name: '+1'}).innerHTML).toBeDefined();
        expect(screen.getByRole('button', {name: '-1'}).innerHTML).toBeDefined();
        expect(screen.getByRole('button', {name: 'Reset'}).innerHTML).toBeDefined();
    });


    test('should increment the counter', () => {
        render(<MyCounterApp/>);

        const labelH1 = screen.getByRole('heading', {level: 1});
        const button = screen.getByRole('button', {name: '+1'});

        fireEvent.click(button);

        expect(labelH1.innerHTML).toContain('counter: 8');
    });
});