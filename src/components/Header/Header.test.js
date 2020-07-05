import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe("Header", () => {
    test("should have props passed", () => {
        const { getByText } = render(
            <Header userName="employee" />
        );
        expect(getByText('employee')).toBeDefined();
    });
})