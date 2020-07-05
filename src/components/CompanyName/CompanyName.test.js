import React from 'react';
import { render } from '@testing-library/react';
import CompanyName from './CompanyName'

describe("CompanyName", () => {
    test("should be SYNCOFFICE", () => {
        const { container } = render(<CompanyName />);
        expect(container.textContent).toBe('SYNCOFFICE');
    })
})