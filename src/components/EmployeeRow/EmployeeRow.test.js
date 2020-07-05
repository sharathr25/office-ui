import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EmployeeRow from './EmployeeRow';

describe("EmployeeRow", () => {
    test("should have props passed", () => {
        const { getByText } = render(
            <EmployeeRow employee={{ name: "employee", role: "admin", team: "dev", _id: "123"}} deleteEmployee={() => {}}/>
        );
        expect(getByText('employee')).toBeDefined();
        expect(getByText('Admin')).toBeDefined();
        expect(getByText('dev')).toBeDefined();
    });
    test("should call deleteEmployee function when we click on delete img", () => {
        const mockFn = jest.fn();
        const { container } = render(
            <EmployeeRow employee={{ name: "employee", role: "admin", team: "dev", _id: "123"}} deleteEmployee={mockFn}/>
        );
        fireEvent.click(container.querySelectorAll('.employee-row__img')[1]);
        expect(mockFn).toHaveBeenCalledWith("123");
    });
    test("should open form when we click on edit img", () => {
        const mockFn = jest.fn();
        const { container } = render(
            <EmployeeRow employee={{ name: "employee", role: "admin", team: "dev", _id: "123"}} deleteEmployee={mockFn}/>
        );
        fireEvent.click(container.querySelectorAll('.employee-row__img')[0]);
        expect(container.querySelector('.employee-form')).toBeDefined();
    })
})