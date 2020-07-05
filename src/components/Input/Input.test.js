import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

describe("Input", () => {
    test("Input label and onChange functions", () => {
        const mockFn = jest.fn();
        const { container } = render(
            <Input label="input" onChange={mockFn} />
        );
        expect(container.textContent.includes('input')).toBe(true);
        const input = container.querySelector('.input-container__input')
        fireEvent.change(input, { target: { value: "123" }} )
        expect(mockFn).toBeCalled();
    });
})

