import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Selector from './Selector';

describe("Input", () => {
    test("Selector with title and options", () => {
        const mockFn = jest.fn();
        const options = ['option 1','option 2'];
        const { container } = render(
            <Selector title="Option" handleChange={mockFn} options={options} selectedOption="option " />
        );
        const radios = container.getElementsByTagName('input');
        expect(radios.length).toBe(2)
        expect(container.textContent.includes('Option')).toBe(true);
        expect(radios[0].getAttribute('checked')).toBeDefined();
        fireEvent.click(radios[1])
        expect(mockFn).toBeCalled();
        expect(radios[1].getAttribute('checked')).toBeDefined();
        fireEvent.click(radios[0])
        expect(mockFn).toBeCalled();
    });
})

